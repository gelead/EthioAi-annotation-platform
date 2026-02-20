import { getDashboardStats, getRecentActivity, getUserByEmail, getTasksByUser } from "@/app/actions";
import { DashboardClient } from "./DashboardClient";

// This is a Server Component that fetches data
export default async function DashboardPage() {
  // For now, using a hardcoded test user email - in production this would come from auth session
  const testUserEmail = "test@ethioai.com";
  
  // Fetch user data
  const userResult = await getUserByEmail(testUserEmail);
  const user = userResult.success ? userResult.user : null;
  
  if (!user) {
    return (
      <div className="flex h-full items-center justify-center text-white">
        <p>User not found. Please run: npx prisma db seed</p>
      </div>
    );
  }
  
  // Fetch dashboard stats and tasks in parallel
  const [statsResult, tasksResult, activityResult] = await Promise.all([
    getDashboardStats(user.id),
    getTasksByUser(user.id),
    getRecentActivity(user.id, 5),
  ]);
  
  const stats = statsResult?.success ? statsResult.stats : null;
  const tasks = tasksResult?.success ? tasksResult.tasks : [];
  const recentTasks = activityResult?.success ? activityResult.tasks : [];

  // Format data for the client component
  const dashboardData = {
    name: user.name.split(" ")[0] || "Annotator",
    userId: user.id,
    stats: stats ? {
      completedTasks: stats.completedTasks.toString(),
      totalRewards: `$${stats.totalRewards.toFixed(2)}`,
      totalTasks: tasks.length.toString(),
    } : {
      completedTasks: "0",
      totalRewards: "$0.00",
      totalTasks: "0",
    },
    tasks: tasks.map((task: { id: string; title: string; status: string; type: string; reward: number }) => ({
      id: task.id,
      title: task.title,
      status: task.status,
      type: task.type,
      reward: task.reward,
    })),
    recentActivity: recentTasks.map((task: { id: string; title: string; status: string; updatedAt: Date }) => ({
      id: task.id.slice(-4).toUpperCase(),
      project: task.title,
      status: task.status === "Completed" ? "Verified" : task.status === "Pending" ? "Pending Review" : "In Progress",
      minutes: Math.floor(Math.random() * 10) + 3,
    })),
  };

  return <DashboardClient data={dashboardData} />;
}

