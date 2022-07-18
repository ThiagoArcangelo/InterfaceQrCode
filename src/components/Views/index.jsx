import { useState, useEffect } from "react";
import React from "react";
import api from "../../services/api";

export function Views() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get("/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => console.log("Ocorreu algum erro."));
  }, []);

  return (
    <div className="view">
      {projects.map((project, key) => (
        <div className="show" key={key}>p 
          <h1>Lista de Projetos</h1>
          <p>Nome: {project.name}</p>
          <p>Titulo: {project.title}</p>
          <p>URL: {project.adress}</p>
        </div>
      ))}
    </div>
  );
}
