import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export function PostId() {

  const [password, setPassword] = useState("");
  const {id} = useParams();

  // Declaração dos headers
 const headers = {
  'x-password': password,
 }

  // Função compare password
  async function handlePasswordId(e) {
    e.preventDefault();

    await api.post(`/projects/password/${id}` , {headers})
      .then((data) => {
        return setPassword(data.password);
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
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
