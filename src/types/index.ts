export type ProjectType = "TEXT" | "IMAGE" | "AUDIO";

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  language: "AMHARIC" | "AFAAN_OROMO";
  progress: number; // 0 - 100
}

export type TaskStatus = "PENDING" | "COMPLETED";

export interface Task {
  id: string;
  projectId: string;
  rawDataUrl: string;
  status: TaskStatus;
}

export interface Annotation {
  id: string;
  taskId: string;
  annotatorId: string;
  labelData: unknown;
}

