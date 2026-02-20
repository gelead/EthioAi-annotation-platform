import { getCurrentUser, fetchDashboardStats } from "@/app/actions";
import { ProfileClient } from "./ProfileClient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { TaskStatus } from "@prisma/client";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  const [user, statsResult] = await Promise.all([
    getCurrentUser(),
    fetchDashboardStats(),
  ]);

  if (!user) {
    redirect("/login");
  }

  const stats = statsResult?.success ? statsResult.stats : null;

  // Format data for client
  const profileData = {
    id: user.id,
    name: user.name || "Annotator",
    email: user.email,
    role: (user as any).role === "ADMIN" ? "Administrator" : "Contributor",
    bio: user.bio || "",
    image: user.image,
    language: user.language || "English",
    joinDate: new Date(user.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    totalAnnotations: stats?.completedTasks || 0,
    qualityScore: 98.5, // Mock quality score for now
    points: Math.round(stats?.totalBalance || 0),
    expertise: ["Amharic", "Medical"], // To be added to schema later if needed
  };

  const recentActivity = (user.tasks || []).slice(0, 5).map((task) => ({
    id: `T-${task.id.slice(-4).toUpperCase()}`,
    project: task.title,
    status: (task.status as any) === "COMPLETED" ? "Verified" : (task.status as any) === "PENDING" ? "Pending Review" : "In Progress",
    date: new Date(task.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
  }));

  return <ProfileClient user={profileData} recentActivity={recentActivity} />;
}
