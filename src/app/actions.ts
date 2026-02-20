"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { TaskStatus } from "@prisma/client";

// Profile Actions
export async function updateProfile(userId: string, formData: FormData) {
  const name = formData.get("name") as string;
  const bio = formData.get("bio") as string;
  const language = formData.get("language") as string;

  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { name, bio, language },
    });

    revalidatePath("/profile");
    return { success: true, user };
  } catch (error) {
    console.error("Failed to update profile:", error);
    return { success: false, error: "Failed to update profile" };
  }
}

// Dashboard Stats
export async function getDashboardStats(userId: string) {
  try {
    const [completedTasks, rewardsAgg] = await Promise.all([
      prisma.task.count({
        where: { userId, status: TaskStatus.Completed },
      }),
      prisma.task.aggregate({
        where: { userId },
        _sum: { reward: true },
      }),
    ]);

    return {
      success: true,
      stats: {
        completedTasks,
        totalRewards: rewardsAgg._sum.reward || 0,
      },
    };
  } catch (error) {
    console.error("Failed to fetch dashboard stats:", error);
    return { success: false, error: "Failed to fetch stats" };
  }
}

// Task Actions
export async function toggleTaskStatus(taskId: string, currentStatus: TaskStatus) {
  const newStatus = currentStatus === TaskStatus.Pending ? TaskStatus.Completed : TaskStatus.Pending;

  try {
    const task = await prisma.task.update({
      where: { id: taskId },
      data: { status: newStatus },
    });

    revalidatePath("/dashboard");
    return { success: true, task };
  } catch (error) {
    console.error("Failed to toggle task status:", error);
    return { success: false, error: "Failed to update task" };
  }
}

export async function getTasks() {
  try {
    const tasks = await prisma.task.findMany({
      include: { user: true },
      orderBy: { createdAt: "desc" },
    });
    return { success: true, tasks };
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    return { success: false, error: "Failed to fetch tasks" };
  }
}

export async function getTasksByUser(userId: string) {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
    return { success: true, tasks };
  } catch (error) {
    console.error("Failed to fetch user tasks:", error);
    return { success: false, error: "Failed to fetch tasks" };
  }
}

export async function getRecentActivity(userId: string, limit: number = 5) {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId },
      orderBy: { updatedAt: "desc" },
      take: limit,
    });
    return { success: true, tasks };
  } catch (error) {
    console.error("Failed to fetch recent activity:", error);
    return { success: false, error: "Failed to fetch activity" };
  }
}

// User Actions
export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { tasks: true },
    });
    return { success: true, user };
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return { success: false, error: "Failed to fetch user" };
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { tasks: { orderBy: { updatedAt: "desc" } } },
    });
    return { success: true, user };
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return { success: false, error: "Failed to fetch user" };
  }
}
