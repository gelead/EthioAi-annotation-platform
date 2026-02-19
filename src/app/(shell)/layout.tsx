import type { ReactNode } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProjectContextProvider } from "@/lib/project-context";

export default function ShellLayout({ children }: { children: ReactNode }) {
  return (
    <ProjectContextProvider>
      <MainLayout>{children}</MainLayout>
    </ProjectContextProvider>
  );
}

