import { useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

const UpdateData = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [key, setKey] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  function handleUpdateProject(e) {
    e.preventDefault();

    const data = {
      name,
      title,
      adress,
      key,
    };

    api.put(`http://localhost:3333/projects/${id}`, data).then((response) => {
      setName(data.name);
      setTitle(data.title);
      setAdress(data.adress);
      setKey(data.key);
    });

    clearContent();
    navigate("/");
  }

  function clearContent() {
    setName("");
    setTitle("");
    // setAdress("");
    setKey("");
  }

  return (
    <div>
      <form className="update-area">
        <label>
          Nome da Empresa:
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Nome"
            placeholder="nome"
          />
        </label>

        <label>
          Equipamento:
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            lable="Titulo"
            placeholder="titulo"
          />
        </label>
        <label>
          URL:
          <input
            name="adress"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            label="URL"
            placeholder="url"
          />
        </label>
        <label>
          Senha:
          <input
            name="key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="password"
            type="password"
          />
        </label>

        <button onClick={handleUpdateProject}>Atualizar</button>
      </form>
    </div>
  );
};

export { UpdateData };
