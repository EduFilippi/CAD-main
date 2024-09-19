import "./Registro.css"
import { useState } from "react";

const Registro = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    e.preventDefault();

  };

  return (

    <div className="Registro-container">
      <form className="Registro-form" onSubmit={handleSubmit}>

        <h2>Registro</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button>CONCLUIR REGISTRO</button>
        </div>
      </form>
    </div>

  );
};

export default Registro;
