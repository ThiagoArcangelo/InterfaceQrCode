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

  async function handleUpdateProject(e) {
    e.preventDefault();

    const data = { name, title, adress, key };

    await api.put(`/projects/update/${id}`, data).then((response) => {
      setName(response.data.name);
      setTitle(response.data.title);
      setAdress(response.data.adress);
      setKey(response.data.key);
    });

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
          <input
            name="name"
            value={[...name]}
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

        <button
          /* onClick={handleUpdateProject} */ className="update-button"
          type="submit"
        >
          Atualizar
        </button>
      </form>
    </div>
  );
};

export { UpdateData };
