import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import api from "../../services/api";
import './style.css';

export function Home() {


  const [projects, setProjects] = useState([]);

  function getProjects() {
    api
    .get("/projects")
    .then((response) => {
       setProjects(response.data);   
    })
    .catch((err) => console.log("Ocorreu algum erro.", err)); 
  }

useEffect(() => {
  getProjects();
 }) 
    
 
  function deletePost(id) {
    api.delete(`/projects/${id}`)
     .then((data) => setProjects(projects.filter((post) => {
      return post._id !== id;
     })));
  } 
 

  return (
    <div className="infoArea"  >  
        <div className='add-box'>
          <Link className="link-name" to="/create">
            Novo Projeto
          </Link>
        </div> 
      {    
        projects !== null &&   
        projects.map((project) => (     
          <table>       
            <tr>      
              <td key={project._id}>{project.name}</td>
              <td>{project.title}</td>
              <td>{project.adress}</td>  
              <div class='button-area'>
                <Link class='button-link' to={`update/${project._id}`} >Atualizar</Link>
                <button id='button' onClick={() => deletePost(project._id)}>Deletar</button>     

              </div> 
            </tr>
          </table>  
        )) 
      }              
    </div>     
  )


  
 


  // return (
  //   <div className="show">
  //     <h1>Lista de Projetos</h1>
  //     {
  //       projects.map((project, key) => (
  //         <div className="infoArea" key={key}>          
  //           <p>Nome: {project.name}</p>
  //           <p>Titulo: {project.title}</p>
  //           <p>URL: {project.adress}</p>
  //         </div>
  //       ))
  //     }
  //   </div>
  // ); 
}



/* 
import { useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

const DeleteContent = () => {
  const id = useParams();
  const [content, setContent] = useState(null);

  function deletePost() {
    api.delete(`/projects/${id}`).then(() => {
      console.log(id);
      alert("Projeto deletado");
      setContent(null);
    });
  }

  if (!content) return "Conteúdo deletado";

  return (
    <div>
      <button onClick={() => deletePost(content._id)}>✖️</button>
    </div>
  );
};

export { DeleteContent };
 */