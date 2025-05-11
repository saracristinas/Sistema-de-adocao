import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("nome", "Sara Sales");
    alert(`Enviando os dados: Email: ${username} - Senha: ${password}`);
    navigate("/home");
  };

  return (
    <div className="login-background-image">
      <div className="login-wrapper">
        <div className="image-side">
          <img src="/src/assets/menina-e-animais.webp" alt="Menina e Animais" />
        </div>

        <div className="form-side">
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

            <div className="button-field">
              <button type="submit">Entrar</button>
            </div>

            <div className="signup-link">
              <p>
                Não tem uma conta? <Link to="/cadastro">Cadastrar</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
