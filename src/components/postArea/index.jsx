import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

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
      api.post('/projects', data)
        .then((response)=> {
          setPosts([response.data, ...posts]);

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
      <form >
        <label>
          Nome da Empresa:
          <input
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
            label='Nome'
            placeholder='nome'
          />
        </label>
       
       <label> 
          Equipamento:
          <input
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            lable='Titulo'
            placeholder='titulo'
          />
       </label>
       <label>
          URL:
          <input
            name='adress'
            value={adress}
            onChange={e => setAdress(e.target.value)}
            label='URL'
            placeholder='url'
          />
       </label>
        <label>
          Senha:
          <input
            name='key'
            value={key}
            onChange={e => setKey(e.target.value)}
            placeholder='password'
            type='password'
          />
        </label>
       
        <button onClick={handleProjectSubmit}>Enviar</button>
      </form>
      
    </div>
  )
}

export { InputArea }