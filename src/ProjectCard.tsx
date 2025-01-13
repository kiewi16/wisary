import React from "react";
import { useState } from "react";
import "./ProjectCard.css";
import thinkingIcon from "./Utilities/thinking-icon.png";
import { ProjectCardProps } from "./Types.tsx";
import {
  Flex,
  Button,
  DropdownMenu,
  Dialog,
  Text,
  TextField,
} from "@radix-ui/themes";

function ProjectCard({ projects, deleteProject }: ProjectCardProps) {
  const [isRenameProjectOpen, setIsRenameProjectOpen] =
    useState<boolean>(false);
  const [currentProjectName, setCurrentProjectName] = useState<string>("");

  function openRenameProject (id: number, name: string) {
    setCurrentProjectName(name)
    setIsRenameProjectOpen(true)
  }

  function closeRenameProject() {
    setIsRenameProjectOpen(false)
    setCurrentProjectName("")
  }

  function handleRenameProject() {
    console.log(`Project renamed to ${currentProjectName}`)
    closeRenameProject()
  }

  return (
    <div className="project-cards-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="header-container">
            <Flex justify="between">
              <p>
                <img src={thinkingIcon} alt="Thinking Icon" />
                {project.name}
              </p>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft" size="1">
                    Options
                    <DropdownMenu.TriggerIcon />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content size="1">
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item
                    onClick={() => openRenameProject(project.id, project.name)}
                  >
                    Rename Project
                  </DropdownMenu.Item>
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
      <Dialog.Root
        open={isRenameProjectOpen}
        onOpenChange={setIsRenameProjectOpen}
      >
        <Dialog.Trigger asChild>
          <Button variant="soft">Rename Project</Button>
        </Dialog.Trigger>
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Rename Project</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Modify the name of your project.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                New Project Name
              </Text>
              <TextField.Root
                value={currentProjectName}
                onChange={(e) => setCurrentProjectName(e.target.value)}
                placeholder="Enter new project name"
              />
            </label>
          </Flex>
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close asChild>
              <Button variant="soft" color="gray" onClick={closeRenameProject}>
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button onClick={handleRenameProject}>Save</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}

export default ProjectCard;