import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate
import "./Login.css";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Instancia o useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("nome", "Sara Sales"); // substituir pelo valor real, vindo de um banco ou formulário
    alert(`Enviando os dados: Email: ${username} - Senha: ${password}`);

    // Após o login, redireciona para a tela de home
    navigate("/home");
  };

  return (
    <div className="login-wrapper">
      <div className="login-wrapper">
        <form className="form-container" onSubmit={handleSubmit}>

          <h1>Login</h1>

          <div className="input-field">
            <input
              type="email"
              placeholder="E-mail"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>

          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a href="#">Esqueceu sua senha?</a>
          </div>

          <button>Entrar</button>

          <div className="signup-link">
            <p>
              Não tem uma conta? <a href="/cadastro">Cadastrar</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
