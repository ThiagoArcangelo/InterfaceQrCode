import { useParams } from "react-router-dom";
import {  useState, useEffect } from "react";
// import api from "../../services/api";]
import axios from 'axios';

export function PostId() {
  // Setando o valor do password
  const [password, setPassword] = useState("");


  const { id } = useParams();

  useEffect(() => {
    const getProjects = async () => {
      await axios.get(`http://localhost:3333/projects/password/${id}`, {headers: {'x-password': password}} )
        // .then((res) => {
        //   if(res.data.project && res.data.project.adress) {
        //     window.location.assign(res.data.project.adress);
        //   }
        // }).catch(error => console.log(error));
        .then(res => {console.log(res.data)})
      }
      getProjects();
  },[password, id])

  // Função compare password
  async function handlePasswordId(e) {
    e.preventDefault();
    await axios
      .post(`http://localhost:3333/projects/password/${id}`, {headers: {'x-password': password}})
        // .then((res) => {
        //   res.location.assign(res.data.adress)
        // }).catch(error => console.log(error));
  }

  return (
    <div>
      <form onSubmit={handlePasswordId}>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite a senha"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
