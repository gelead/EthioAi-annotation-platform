"use client";

import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";
import type { Project, Task } from "@/types";

interface ProjectContextValue {
  projects: Project[];
  tasks: Task[];
  currentProject: Project | null;
  currentTask: Task | null;
  setCurrentProjectById: (projectId: string) => void;
  submitAnnotationAndNext: () => void;
}

const ProjectContext = createContext<ProjectContextValue | undefined>(undefined);

interface ProjectProviderProps {
  children: ReactNode;
}

const mockProjects: Project[] = [
  {
    id: "p1",
    name: "Amharic NER - Newswire",
    type: "TEXT",
    language: "AMHARIC",
    progress: 42,
  },
  {
    id: "p2",
    name: "Teff Leaf Disease Detection",
    type: "IMAGE",
    language: "AMHARIC",
    progress: 68,
  },
  {
    id: "p3",
    name: "Afaan Oromo Radio Transcription",
    type: "AUDIO",
    language: "AFAAN_OROMO",
    progress: 15,
  },
];

const mockTasks: Task[] = [
  {
    id: "t1",
    projectId: "p1",
    rawDataUrl: "በአዲሱ የኢትዮጵያ ዲጂታል ፕሮጀክት መሠረት ላይ የተዘጋ የዜና ጽሑፍ ነው።",
    status: "PENDING",
  },
  {
    id: "t2",
    projectId: "p1",
    rawDataUrl: "ይህ ናሙና ለየተለያዩ የስም መለያያት ምርመራ ይውላል።",
    status: "PENDING",
  },
];

export function ProjectContextProvider({ children }: ProjectProviderProps) {
  const [projects] = useState<Project[]>(mockProjects);
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [currentTaskId, setCurrentTaskId] = useState<string | null>(mockTasks[0]?.id ?? null);
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(
    mockProjects[0]?.id ?? null,
  );

  const currentProject = useMemo(
    () => projects.find((p) => p.id === currentProjectId) ?? null,
    [projects, currentProjectId],
  );

  const currentTask = useMemo(
    () => tasks.find((t) => t.id === currentTaskId) ?? null,
    [tasks, currentTaskId],
  );

  const setCurrentProjectById = (projectId: string) => {
    setCurrentProjectId(projectId);
    setCurrentTaskId((prev) => {
      const nextTask = tasks.find(
        (t) => t.projectId === projectId && t.status === "PENDING",
      );
      return nextTask?.id ?? prev;
    });
  };

  const submitAnnotationAndNext = () => {
    if (!currentTask) return;

    setTasks((prev) =>
      prev.map((t) => (t.id === currentTask.id ? { ...t, status: "COMPLETED" } : t)),
    );

    setCurrentTaskId((prevId) => {
      const remaining = tasks.filter(
        (t) =>
          t.projectId === currentTask.projectId &&
          t.status === "PENDING" &&
          t.id !== currentTask.id,
      );

      const next = remaining[0];
      return next?.id ?? prevId;
    });
  };

  const value: ProjectContextValue = {
    projects,
    tasks,
    currentProject,
    currentTask,
    setCurrentProjectById,
    submitAnnotationAndNext,
  };

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}

export function useProjectContext(): ProjectContextValue {
  const ctx = useContext(ProjectContext);
  if (!ctx) {
    throw new Error("useProjectContext must be used within ProjectContextProvider");
  }
  return ctx;
}

\"use client\";

import React, { createContext, useContext, useMemo, useState, ReactNode } from \"react\";
import type { Project, Task } from \"@/types\";

interface ProjectContextValue {
  projects: Project[];
  tasks: Task[];
  currentProject: Project | null;
  currentTask: Task | null;
  setCurrentProjectById: (projectId: string) => void;
  submitAnnotationAndNext: () => void;
}

const ProjectContext = createContext<ProjectContextValue | undefined>(undefined);

interface ProjectProviderProps {
  children: ReactNode;
}

const mockProjects: Project[] = [
  {
    id: \"p1\",
    name: \"Amharic NER - Newswire\",
    type: \"TEXT\",
    language: \"AMHARIC\",
    progress: 42,
  },
  {
    id: \"p2\",
    name: \"Teff Leaf Disease Detection\",
    type: \"IMAGE\",
    language: \"AMHARIC\",
    progress: 68,
  },
  {
    id: \"p3\",
    name: \"Afaan Oromo Radio Transcription\",
    type: \"AUDIO\",
    language: \"AFAAN_OROMO\",
    progress: 15,
  },
];

const mockTasks: Task[] = [
  {
    id: \"t1\",
    projectId: \"p1\",
    rawDataUrl: \"Lorem ipsum dolor sit amet in Amharic placeholder.\",
    status: \"PENDING\",
  },
  {
    id: \"t2\",
    projectId: \"p1\",
    rawDataUrl: \"Second Amharic sentence for NER.\",
    status: \"PENDING\",
  },
];

export function ProjectContextProvider({ children }: ProjectProviderProps) {
  const [projects] = useState<Project[]>(mockProjects);
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [currentTaskId, setCurrentTaskId] = useState<string | null>(mockTasks[0]?.id ?? null);
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(mockProjects[0]?.id ?? null);

  const currentProject = useMemo(
    () => projects.find((p) => p.id === currentProjectId) ?? null,
    [projects, currentProjectId],
  );

  const currentTask = useMemo(
    () => tasks.find((t) => t.id === currentTaskId) ?? null,
    [tasks, currentTaskId],
  );

  const setCurrentProjectById = (projectId: string) => {
    setCurrentProjectId(projectId);
    const nextTask = tasks.find((t) => t.projectId === projectId && t.status === \"PENDING\");
    setCurrentTaskId(nextTask?.id ?? null);
  };

  const submitAnnotationAndNext = () => {
    if (!currentTask) return;

    setTasks((prev) =>
      prev.map((t) => (t.id === currentTask.id ? { ...t, status: \"COMPLETED\" } : t)),
    );

    const remaining = tasks.filter(
      (t) => t.projectId === currentTask.projectId && t.status === \"PENDING\" && t.id !== currentTask.id,
    );

    const next = remaining[0];
    setCurrentTaskId(next?.id ?? null);
  };

  const value: ProjectContextValue = {
    projects,
    tasks,
    currentProject,
    currentTask,
    setCurrentProjectById,
    submitAnnotationAndNext,
  };

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}

export function useProjectContext(): ProjectContextValue {
  const ctx = useContext(ProjectContext);
  if (!ctx) {
    throw new Error(\"useProjectContext must be used within ProjectContextProvider\");
  }
  return ctx;
}

