import React from "react";
import "./App.css";
import { Button } from "@radix-ui/themes";
import ProjectCard from './ProjectCard.tsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Wisary Dashboard</h3>
        <Button style={{ marginTop: "39px" }}>New Project</Button>
      </header>
      <ProjectCard />
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
