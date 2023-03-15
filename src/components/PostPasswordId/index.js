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
          const url = new URL(res.data);
<<<<<<< HEAD
          // window.location.replace(url);
          // window.location.href = url;
          window.location.assign(url);
=======
          window.location.replace(url);
          // window.location.href = url;
>>>>>>> 0be94da6e75b3bc9415a6ab39205ad47d0d95a9a
        })
        .catch((error) => console.log(error));
    };
    getProjects();
  });

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
