import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import dogloginImage from "../../assets/dog-coitado.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: username,
        password: password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);

      const userResponse = await axios.get("http://localhost:8080/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = userResponse.data;
      localStorage.setItem("name", user.name);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/home");
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Email ou senha inválidos.");
    }
  };

  return (
    <div className="login-background-image">
      <div className="login-wrapper">
        <div className="image-side">
          <img src={dogloginImage} alt="Imagem de um cachorro carente" />
          <h3 className="login-quote">
            Você talvez não mude o mundo inteiro, mas pode transformar o mundo de um pet <span class="pata">🐾</span>
          </h3>
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