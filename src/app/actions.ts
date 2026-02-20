"use server";

import { PrismaClient, TaskType, Status } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

// Task Actions
export async function getTasks() {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
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
      orderBy: {
        createdAt: "desc",
      },
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
      orderBy: {
        updatedAt: "desc",
      },
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
      include: {
        tasks: true,
      },
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
      include: {
        tasks: {
          orderBy: {
            updatedAt: "desc",
          },
        },
      },
    });
    return { success: true, user };
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return { success: false, error: "Failed to fetch user" };
  }
}

export async function updateUserProfile(
  userId: string,
  data: {
    name?: string;
    bio?: string;
    image?: string;
  }
) {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data,
    });
    revalidatePath("/profile");
    return { success: true, user };
  } catch (error) {
    console.error("Failed to update profile:", error);
    return { success: false, error: "Failed to update profile" };
  }
}

export async function updateUserStats(
  userId: string,
  data: {
    totalPoints?: number;
    qualityScore?: number;
  }
) {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data,
    });
    return { success: true, user };
  } catch (error) {
    console.error("Failed to update user stats:", error);
    return { success: false, error: "Failed to update stats" };
  }
}

// Dashboard Stats
export async function getDashboardStats(userId: string) {
  try {
    const [user, totalTasks, completedTasks] = await Promise.all([
      prisma.user.findUnique({
        where: { id: userId },
        select: {
          totalPoints: true,
          qualityScore: true,
        },
      }),
      prisma.task.count({
        where: { userId },
      }),
      prisma.task.count({
        where: { userId, status: Status.COMPLETED },
      }),
    ]);

    return {
      success: true,
      stats: {
        totalAnnotations: totalTasks,
        completedTasks,
        qualityScore: user?.qualityScore || 0,
        totalPoints: user?.totalPoints || 0,
      },
    };
  } catch (error) {
    console.error("Failed to fetch dashboard stats:", error);
    return { success: false, error: "Failed to fetch stats" };
  }
}
