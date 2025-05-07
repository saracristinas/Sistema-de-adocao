import { FaUser, FaLock} from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

import meninaImg from '../../assets/menina-e-animais.webp';
import patinhas from '../../assets/patinhas.webp';
import pc from '../../assets/pc.png';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassoword] = useState("");
  
    const handlerSubimit = (event) => {
      event.preventDefault();
      alert("Enviando os dados: " + "Email: " + username + " - " + "Senha: "+ password);
    };
  
    return (
<div className="login-wrapper">
    
  <div className="left-side">
    <div className="image-container">
      <img src={meninaImg} alt="Menina com animais" className="img-menina" />
      <img src={patinhas} alt="patinhas de cachorro" className="img-patinha" />
      <img src={pc} alt="notebook" className="img-pc" />
    </div>
  </div>

  <div className="right-side">
    <div className="form-container">
      <form onSubmit={handlerSubimit}>
        <h1>Login</h1>
        <div className="input-field">
          <input 
            type="email" 
            placeholder='E-mail' 
            required 
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input 
            type="password" 
            placeholder='Senha' 
            required 
            onChange={(e) => setPassoword(e.target.value)}
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
            Não tem uma conta? <a href="#">Cadastrar</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>
    );
  };
  
  export default Login;  