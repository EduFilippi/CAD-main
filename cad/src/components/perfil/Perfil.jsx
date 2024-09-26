import { useState } from "react";
import './Perfil.css';

const Perfil = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando os Dados:" + username + " - " + password);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>EDITAR PERFIL</h1>
          <div className="input-field" />
          <div>
            <input type="text"
              placeholder="Nome Completo"
              required
              onChange={(e) => setUsername(e.target.value)} />
            <div>
              <input type="text"
                placeholder="E-mail ou Telefone"
                required
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <input type="text"
                placeholder="Editar Senha"
                required
                onChange={(e) => setUsername(e.target.value)} />
              <div>
                <input type="text" placeholder="Confirmar Senha"
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div>
                <a href="#">Esqueceu a senha?</a>
              </div>
              <button>ENTRAR</button>
              <div className="signup-link">
                <p>
                  Não tem uma conta? <a href="#">CONFIRMAR</a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Perfil;