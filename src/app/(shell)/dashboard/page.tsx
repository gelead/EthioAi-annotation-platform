import { getDashboardStats, getRecentActivity, getUserByEmail } from "@/app/actions";
import { DashboardClient } from "./DashboardClient";

// This is a Server Component that fetches data
export default async function DashboardPage() {
  // For now, using a hardcoded test user email - in production this would come from auth session
  const testUserEmail = "test@ethioai.com";
  
  // Fetch user data
  const userResult = await getUserByEmail(testUserEmail);
  const user = userResult.success ? userResult.user : null;
  
  // Fetch dashboard stats
  const statsResult = user ? await getDashboardStats(user.id) : null;
  const stats = statsResult?.success ? statsResult.stats : null;
  
  // Fetch recent activity
  const activityResult = user ? await getRecentActivity(user.id, 5) : null;
  const recentTasks = activityResult?.success ? activityResult.tasks : [];

  // Format data for the client component
  const dashboardData = {
    name: user?.name?.split(" ")[0] || "Annotator",
    stats: stats ? {
      totalAnnotations: stats.totalAnnotations.toLocaleString(),
      qualityScore: `${Math.round(stats.qualityScore)}%`,
      earnings: `${stats.totalPoints.toLocaleString()} pts`,
    } : {
      totalAnnotations: "0",
      qualityScore: "0%",
      earnings: "0 pts",
    },
    recentActivity: recentTasks.map((task: { id: string; title: string; status: string; updatedAt: Date }) => ({
      id: task.id.slice(-4).toUpperCase(),
      project: task.title,
      status: task.status === "COMPLETED" ? "Verified" : task.status === "PENDING" ? "Pending Review" : "In Progress",
      minutes: Math.floor(Math.random() * 10) + 3, // Simulated time for now
    })),
  };

  return <DashboardClient data={dashboardData} />;
}

