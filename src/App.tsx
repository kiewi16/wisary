import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Button } from "@radix-ui/themes";
import { SampleProject } from "./Types.tsx"; 
import ProjectCard from './ProjectCard.tsx'

function App() {
  const SampleProjects: SampleProject[] = [
    { id: 1, title: "Project Alpha"},
    { id: 2, title: "Project Beta"},
    { id: 3, title: "Project Charlie"},
    { id: 4, title: "Project Delta"},
    { id: 5, title: "Project Echo"}
  ]
  const [projects, setProjects] = useState<[]>([])

  useEffect(() => {
    setProjects(SampleProjects)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Wisary Dashboard</h3>
        <Button style={{ marginTop: "39px" }}>New Project</Button>
      </header>
      <ProjectCard projects={projects}/>
    </div>
  );
}

// function App() {
//   return (
//     <Flex display="flex" flexDirection="row" justifyContent="space-between">
//       <Text>Wisary Dasboard</Text>
//       <Button>New Project</Button>
//     </Flex>
//   );
// }

export default App;