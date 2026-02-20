"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { TaskStatus } from "@prisma/client";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

// Auth Actions
export async function handleSignup(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  if (!email || !password) {
    return { success: false, error: "Email and password are required" };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { success: false, error: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: "USER",
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Signup failed:", error);
    return { success: false, error: "Something went wrong" };
  }
}

// Profile Actions
export async function updateProfile(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return { success: false, error: "Unauthorized" };
  }

  const name = formData.get("name") as string;
  const bio = formData.get("bio") as string;
  const language = formData.get("language") as string;

  try {
    await prisma.user.update({
      where: { email: session.user.email! },
      data: { name, bio, language },
    });

    revalidatePath("/profile");
    return { success: true };
  } catch (error) {
    console.error("Failed to update profile:", error);
    return { success: false, error: "Failed to update profile" };
  }
}

// Dashboard & Stats
export async function fetchDashboardStats() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return { success: false, error: "Unauthorized" };
  }

  const userId = (session.user as any).id;

  try {
    const [totalTasks, completedTasks, pendingTasks, user] = await Promise.all([
      prisma.task.count({ where: { userId } }),
      prisma.task.count({ where: { userId, status: TaskStatus.COMPLETED } }),
      prisma.task.count({ where: { userId, status: TaskStatus.PENDING } }),
      prisma.user.findUnique({
        where: { id: userId },
        select: { points: true },
      }),
    ]);

    return {
      success: true,
      stats: {
        totalTasks,
        completedTasks,
        pendingTasks,
        totalBalance: user?.points || 0,
      },
    };
  } catch (error) {
    console.error("Failed to fetch dashboard stats:", error);
    return { success: false, error: "Failed to fetch stats" };
  }
}

// Task Actions
export async function completeTask(taskId: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task || task.status === TaskStatus.COMPLETED) {
      return { success: false, error: "Task not found or already completed" };
    }

    // Transaction to update task and increment user points
    await prisma.$transaction([
      prisma.task.update({
        where: { id: taskId },
        data: { status: TaskStatus.COMPLETED },
      }),
      prisma.user.update({
        where: { id: task.userId },
        data: { points: { increment: task.rewardAmount } },
      }),
    ]);

    revalidatePath("/dashboard");
    revalidatePath("/profile");
    return { success: true };
  } catch (error) {
    console.error("Failed to complete task:", error);
    return { success: false, error: "Failed to complete task" };
  }
}

// Queries
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

export async function getRecentActivity(limit: number = 5) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return { success: false, error: "Unauthorized" };

  const userId = (session.user as any).id;

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

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return null;

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email! },
      include: { tasks: { orderBy: { updatedAt: "desc" } } },
    });
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
}

export async function getActiveMissions() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { progress: "asc" }, // Show most "active" or needing help
      take: 4,
    });
    return { success: true, projects };
  } catch (error) {
    console.error("Failed to fetch active missions:", error);
    return { success: false, error: "Failed to fetch missions" };
  }
}
