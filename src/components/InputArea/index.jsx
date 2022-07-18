import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import api from '../../services/api';

const InputArea = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [adress, setAdress] = useState('');
  const [key, setKey] = useState('');

  function handleProjectSubmit() {
    const data = {
      name,
      title,
      adress,
      key
    }

    api.post('http://localhost:3333/projects', data)
  }



  return(
    <div>
      <input
       name='name'
       onChange={e => setName(e.target.value)}
       label='Nome'
       placeholder='nome'
      />
      <input
        name='title'
        onChange={e => setTitle(e.target.value)}
        lable='Titulo'
        placeholder='titulo'
      />
      <input
        name='adress'
        onChange={e => setAdress(e.target.value)}
        label='URL'
        placeholder='url'
      />
      <input
        name='key'
        onChange={e => setKey(e.target.value)}
        placeholder='password'
        type='password'
      />
      <button onClick={handleProjectSubmit}>Enviar</button>
    </div>
  )
}

export { InputArea }