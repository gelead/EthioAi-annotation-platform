import { fetchDashboardStats, getRecentActivity, getCurrentUser } from "@/app/actions";
import { DashboardClient } from "./DashboardClient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { TaskStatus } from "@prisma/client";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  const [statsResult, user] = await Promise.all([
    fetchDashboardStats(),
    getCurrentUser(),
  ]);

  const stats = statsResult?.success ? statsResult.stats : null;
  const recentTasks = user?.tasks || [];

  // Format data for the client component
  const dashboardData = {
    name: user?.name?.split(" ")[0] || "Annotator",
    userId: user?.id || "",
    stats: stats ? {
      completedTasks: stats.completedTasks.toString(),
      totalRewards: `$${stats.totalBalance.toFixed(2)}`,
      totalTasks: stats.totalTasks.toString(),
    } : {
      completedTasks: "0",
      totalRewards: "$0.00",
      totalTasks: "0",
    },
    tasks: (user?.tasks || []).map((task) => ({
      id: task.id,
      title: task.title,
      status: task.status,
      type: task.type,
      reward: (task as any).rewardAmount || 0,
    })),
    recentActivity: (recentTasks || []).slice(0, 5).map((task) => ({
      id: task.id.slice(-4).toUpperCase(),
      category: task.title,
      status: ((task.status as any) === "COMPLETED" ? "Verified" : "Pending") as "Verified" | "Pending" | "Rejected",
      earnings: `$${((task as any).rewardAmount || 0).toFixed(2)}`,
      date: new Date(task.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    })),
  };

  return <DashboardClient data={dashboardData} />;
}

