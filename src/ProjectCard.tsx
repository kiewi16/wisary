import React from "react";
import "./ProjectCard.css";
import thinkingIcon from "./Utilities/thinking-icon.png";
import { ProjectCardProps } from "./Types.tsx";
import { Flex, Button, DropdownMenu } from "@radix-ui/themes";

function ProjectCard({ projects, deleteProject }: ProjectCardProps) {
    return (
        <div className="project-cards-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
                    
              <div className="header-container">
                <Flex justify="between">
                  <p><img src={thinkingIcon} alt="Thinking Icon"/>{project.name}</p>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button variant="soft" size="1">
                        Options
                        <DropdownMenu.TriggerIcon />
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content size="1">
                      <DropdownMenu.Separator />
                      <DropdownMenu.Item>Rename Project</DropdownMenu.Item>
                      <DropdownMenu.Separator />
                      <DropdownMenu.Item
                        color="red"
                        onClick={() => deleteProject(project.id)}
                      >
                        Delete
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </Flex>
              </div>
              <Button>Project Details</Button>
            </div>
          ))}
        </div>
      );
}
export default ProjectCard;