import api from "../../services/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";

export function PostId() {
  // Setando o valor do password
  const [password, setPassword] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getProjects = async () => {
      await api
        .get(`/projects/password/${id}`, {
          headers: { "x-password": password },
        })
        .then((res) => {
          if (res.data.project && res.data.project.adress) {
            window.location.assign(res.data.project.adress);
          }
        })
        .catch((error) => console.log(error));
    };
    getProjects();
  }, [password, id]);

  // Função compare password
  async function handlePasswordId(e) {
    e.preventDefault();

    await api
      .post(`/projects/password/${id}`, {
        headers: { "x-password": password },
      })
      .then(() => {
        console.log("Ok True!");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="post-form">
      <form onSubmit={handlePasswordId}>
        <input
          autocomplete="off"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite a senha"
        />
        <button type="submit" className="button-submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
