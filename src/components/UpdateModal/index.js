import { useState } from "react";
// import { useHistory } from 'react-router-dom';
import api from "../../services/api";
import "./style.css";

const UpdateData = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [key, setKey] = useState("");
  const [posts, setPosts] = useState([]);

  function handleProjectSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      title,
      adress,
      key,
    };

    api.post("http://localhost:3333/projects", data).then((response) => {
      setPosts([response.data, ...posts]);
      // setPosts(response.data)
    });

    clearContent();
  }

  function clearContent() {
    setName("");
    setTitle("");
    setAdress("");
    setKey("");
  }

  return (
    <div className="postArea">
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Nome"
        placeholder="nome"
      />
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        lable="Titulo"
        placeholder="titulo"
      />
      <input
        name="adress"
        value={adress}
        onChange={(e) => setAdress(e.target.value)}
        label="URL"
        placeholder="url"
      />
      <input
        name="key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="password"
        type="password"
      />
      <button onClick={handleProjectSubmit}>Enviar</button>
    </div>
  );
};

export { UpdateData };
