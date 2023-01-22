import { useEffect, useState } from "react";
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

  useEffect(() => {
    api.get(`projects/${id}`)
      .then((response) => {
        setName(response.data.name);
        setTitle(response.data.title);
        setAdress(response.data.adress);
        setKey(response.data.key);
      }).catch((error) => {
        console.log("Não foi possível processar sua requisição.", error);
      });
  }, [id]);

  function handleUpdateProject(e) {
    e.preventDefault();

    const data = {
      name,
      title,
      adress,
      key,
    };  

    api.put(`/projects/update/${id}`, data)
    .then((response) => {
      setName(response.data.name);
      setTitle(response.data.title);
      setAdress(response.data.adress);
      setKey(response.data.key);
    });
    navigate("/");
  } 

  return (
    <div className="update-area">
      <form clasName='form-update' autoComplete="off">
        <label className='label-update'>
          <span>Nome da Empresa:</span>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Nome"
            placeholder={name}
          />
        </label>

        <label className='label-update'>
          Equipamento:
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            lable="Titulo"
            placeholder={title}
          />
        </label>
        <label className='label-update'>
          URL:
          <input
            name="adress"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            label="URL"
            placeholder={adress}
          />
        </label >
        <label className='label-update'>
          Senha:
          <input 
            name="key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder={key}
            type="password"
          />
        </label>
        <button onClick={handleUpdateProject} >Atualizar</button>
      </form>
    </div>
  );
};

export { UpdateData };
