import React, { useState, useEffect } from "react";
import api from "./services/api";

import Header from "./components/Header";

import backgroundImage from "./assets/background.jpg";
import "./App.css";

function App() {
  // useState -> retorna array com duas posições
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post("projects", {
      title: `Novo projeto ${Date.now()}`,
      owner: "Christopher H. Schott",
    });

    const project = response.data;

    // Respeitando conceitos de Imutabilidade
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>

      <div>
        <img height={300} src={backgroundImage} />
      </div>
    </>
  );
}

export default App;
