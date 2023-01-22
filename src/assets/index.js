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

<<<<<<< HEAD:src/components/UpdateModal/index.js
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
=======
  async function handleUpdateProject(e) {
    e.preventDefault();

    const data = { name, title, adress, key };

    await api.put(`/projects/update/${id}`, data).then((response) => {
>>>>>>> 564a4d57a83201c39bda20b46da557eb147b8cd9:src/assets/index.js
      setName(response.data.name);
      setTitle(response.data.title);
      setAdress(response.data.adress);
      setKey(response.data.key);
    });
<<<<<<< HEAD:src/components/UpdateModal/index.js
    navigate("/");
  } 

  return (
    <div className="update-area">
      <form clasName='form-update' autoComplete="off">
        <label className='label-update'>
          <span>Nome da Empresa:</span>
=======

    navigate("/");
  }

  useEffect(() => {
    api
      .get(`/projects/${id}`)
      .then((response) => {
        setName(response.data.name);
        setTitle(response.data.title);
        setAdress(response.data.adress);
        setKey(response.data.key);
      })
      .catch((err) => console.log("Ocorreu algum erro.", err));
  }, [id]);

  useEffect(() => {
    handleUpdateProject();
  }, [id]);

  return (
    <div>
      <form className="update-area" onSubmit={handleUpdateProject}>
        <label>
          Nome da Empresa:
>>>>>>> 564a4d57a83201c39bda20b46da557eb147b8cd9:src/assets/index.js
          <input
            name="name"
            value={[...name]}
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
<<<<<<< HEAD:src/components/UpdateModal/index.js
        <button onClick={handleUpdateProject} >Atualizar</button>
=======

        <button
          /* onClick={handleUpdateProject} */ className="update-button"
          type="submit"
        >
          Atualizar
        </button>
>>>>>>> 564a4d57a83201c39bda20b46da557eb147b8cd9:src/assets/index.js
      </form>
    </div>
  );
};

export { UpdateData };
