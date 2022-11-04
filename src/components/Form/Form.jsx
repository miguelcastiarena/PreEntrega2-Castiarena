import { useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.nombre.value)
  };

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  console.log(nombre);

  const handleChangeApellido = (e) => {
    setApellido(e.target.value);
  };
  console.log(apellido);

  return (
    <div className="form">
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChangeNombre}
          value={nombre}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChangeApellido}
          value={apellido}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
