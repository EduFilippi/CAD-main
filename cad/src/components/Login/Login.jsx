import { useState } from "react";
import './Login.css';

const Login = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();

alert("Enviando os Dados:" + username + " - " + password);
};

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <div className="input-field"/>
        <div>
          <input type="email ou telefone" 
          placeholder="E-mail ou Telefone"
          required
          onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="Senha" 
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button>ENTRAR</button>
        <div className="signup-link">
            <p>
                Não tem uma conta? <a href="#">Criar uma Conta</a>
            </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
