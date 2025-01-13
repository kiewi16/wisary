import React from "react";
import { ProjectCardProps } from "./Types.tsx"; 

function ProjectCard({ projects }: ProjectCardProps) {
    return (
        <div>
            {projects.map(project => (
                <div key={project.id}>
                    <p>{project.title}</p>
                </div>
            ))}
        </div>
    )
}
export default ProjectCard