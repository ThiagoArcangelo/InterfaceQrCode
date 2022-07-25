import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

const DeleteContent = () => {
  const [content, setContent] = useState(null);
  const { id } = useParams();

  function deletePost() {
    api.delete(id).then(() => {
      alert("Projeto deletado");
      setContent(null);
    });
  }

  if (!content) return "Conteúdo deletado";

  return (
    <div>
      <button onClick={deletePost}>✖️</button>
    </div>
  );
};

export { DeleteContent };
