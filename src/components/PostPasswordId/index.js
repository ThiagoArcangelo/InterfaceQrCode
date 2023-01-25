import api from '../../services/api';
import {useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export function PostId() {

  const [password, setPassword] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  // Declaração dos headers
 const headers = {
  "x-password": password,
 }

  // Função compare password
  async function handlePasswordId(e) {
    e.preventDefault();

    await api.post(`/projects/password/${id}` , {headers})
      .then((response) => {
        setPassword(response.data.password);
        if(response.status === 302  /* || response.status === 307 */) {
          const redirectUrl = response.headers.location;
          navigate(redirectUrl);
        }
      })
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
  )
}
