import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Usado para navegação programática

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validação simples de login (pode ser expandida com autenticação real)
    if (username === "joao" && password === "12345") {
      // Redirecionar para a Home após login bem-sucedido
      navigate("/home");
    } else {
      alert("Usuário ou senha incorretos.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
  );
};

export default Login;
