import {useState } from 'react';
import api from '../../services/api';
import './style.css';
import { useNavigate } from 'react-router-dom';

const InputArea = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [adress, setAdress] = useState('');
  const [key, setKey] = useState('');
  const [ posts, setPosts ] = useState([]);

  const navigate = useNavigate();


    function handleProjectSubmit(e) {
      e.preventDefault();

      const data = {
        name,
        title,
        adress,
        key
      } 
      api.post('http://localhost:3333/projects', data)
        .then((response)=> {
          setPosts([response.data, ...posts]);
          // setPosts(response.data)
        })

      clearContent();
      navigate('/');
    }    

    function clearContent() {
      setName('');
      setTitle('');
      setAdress('');
      setKey('');
    }

  return(
    <div className='postArea'>
      <h1>Criando Projetos Wengaut</h1>
      <input
       name='name'
       value={name}
       onChange={e => setName(e.target.value)}
       label='Nome'
       placeholder='nome'
      />
      <input
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
        lable='Titulo'
        placeholder='titulo'
      />
      <input
        name='adress'
        value={adress}
        onChange={e => setAdress(e.target.value)}
        label='URL'
        placeholder='url'
      />
      <input
        name='key'
        value={key}
        onChange={e => setKey(e.target.value)}
        placeholder='password'
        type='password'
      />
      <button onClick={handleProjectSubmit}>Enviar</button>
    </div>
  )
}

export { InputArea }