"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { ProjectModal } from "@/components/sub/project-modal";
import { PROJECTS } from "@/constants";
import { AnimatePresence } from "framer-motion";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[number] | null>(null);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject as any}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
