import { getUserByEmail, getRecentActivity, getDashboardStats } from "@/app/actions";
import { ProfileClient } from "./ProfileClient";

export default async function ProfilePage() {
  // Fetch test user data
  const testUserEmail = "test@ethioai.com";
  
  const userResult = await getUserByEmail(testUserEmail);
  const user = userResult.success ? userResult.user : null;
  
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] text-white">
        <p>User not found. Please run: npx prisma db seed</p>
      </div>
    );
  }

  // Fetch recent activity
  const activityResult = await getRecentActivity(user.id, 3);
  const recentTasks = activityResult?.success ? activityResult.tasks : [];

  // Fetch stats
  const statsResult = await getDashboardStats(user.id);
  const stats = statsResult?.success ? statsResult.stats : null;

  // Format data for client
  const profileData = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    bio: user.bio || "",
    image: user.image,
    joinDate: new Date(user.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    totalAnnotations: stats?.totalAnnotations || 0,
    qualityScore: Math.round(stats?.qualityScore || 0),
    points: stats?.totalPoints || 0,
    expertise: ["Amharic", "Medical"], // Could be a separate model
  };

  const recentActivity = recentTasks.map((task: { id: string; title: string; status: string; updatedAt: Date }) => ({
    id: `T-${task.id.slice(-4).toUpperCase()}`,
    project: task.title,
    status: task.status === "COMPLETED" ? "Verified" : task.status === "PENDING" ? "Pending Review" : "In Progress",
    date: new Date(task.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
  }));

  return <ProfileClient user={profileData} recentActivity={recentActivity} />;
}
