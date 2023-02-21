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
          // window.location.assign(res.data);
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    };
    getProjects();
  }, [password, id]);

  const key = {
    key: password,
  };

  // Função compare password
  async function handlePasswordId(e) {
    e.preventDefault();

    await api
      .post(`/projects/password/${id}`, key, {
        headers: { "x-password": password },
      })
      .then((res) => {
        // setPassword(res.data.key)
        console.log("Ok True");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="post-form">
      <form onSubmit={handlePasswordId}>
        <input
          // autocomplete="off"
          type={password}
          // name="password"
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
