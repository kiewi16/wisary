import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Button } from "@radix-ui/themes";
import { SampleProject } from "./Types.tsx"; 
import ProjectCard from './ProjectCard.tsx'

function App() {
  const SampleProjects: SampleProject[] = [
    { id: 1, name: "Project Alpha"},
    { id: 2, name:  "Project Beta"},
    { id: 3, name:  "Project Charlie"},
    { id: 4, name: "Project Delta"},
    { id: 5, name: "Project Echo"}
  ]
  const [projects, setProjects] = useState<[]>([])

  useEffect(() => {
    setProjects(SampleProjects)
  }, [])

  function deleteProject(id: number) {
    const filteredProjects = projects.filter(project => project.id !== id)
    setProjects(filteredProjects)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Wisary Dashboard</h3>
        <Button style={{ marginTop: "39px" }}>New Project</Button>
      </header>
      <ProjectCard projects={projects} deleteProject={deleteProject}/>
    </div>
  )
}

export default App;