import api from "../../services/api";
import { /* useNavigate, */ useParams } from "react-router-dom";
import { useState } from "react";

export function PostId() {
  const [password, setPassword] = useState({});

  const { id } = useParams();
  // const navigate = useNavigate();

  // Declaração dos headers
  const config = {
    headers: {
      "x-password": password,
    },
  };
  // const headers = {
  //   "x-password": password,
  // };

  // Função compare password
  function handlePasswordId(e) {
    e.preventDefault();

    api
      .post(`/projects/password/${id}`, /* { headers } */ {}, config)
      .then((response) => {
        console.log(response.data);
        // setPassword(response.data.key);
        // if (response.status === 302 || response.status === 307) {
        //   const redirectUrl = response.headers.location;
        //   navigate(redirectUrl);
        // }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <div>
      <form onSubmit={handlePasswordId}>
        <input
          name="password"
          // value={password}
          onChange={(e) => setPassword({ password: e.target.value })}
          placeholder="Digite a senha"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
