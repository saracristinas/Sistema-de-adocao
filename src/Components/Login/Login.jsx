import { FaUser, FaLock} from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

// import meninaAnimais from "../../assets/menina-e-animais.webp";
// import patinhas from "../../assets/patinhas.webp";
// import pc from "../../assets/pc.png";
// import rodinha from "../../assets/rodinha.webp";


const Login = () => {

    const[username, setUsername] = useState("");
    const [password, setPassoword] = useState("");

    const handlerSubimit = (event) => {
        event.preventDefault();

        // ### Console direto na aplicacao pra verificar se os dados estao sendo carregados no front
        // console.log(username, password);

        // console.log("Envio");

        alert("Enviando os dados: " + "Email: " + username + " - " + "Senha: "+ password);
    };

  return (
      <div className="container">
        <form onSubmit={handlerSubimit}>
            <h1>Login</h1>
            <div className="input-field">
                <input 
                type="email" 
                placeholder='E-mail' 
                required /* Nao permite que o usuario entre sem email*/
                onChange={(e) => setUsername(e.target.value)}
                />
                <FaUser className="icon" />
            </div>

            <div className="input-field">
                <input 
                type="password" 
                placeholder='Senha' 
                required /* Nao permite que o usuario entre sem senha*/
                onChange={(e) => setPassoword(e.target.value)}/>
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

        {/* <div className="imagens">
            <img src="{menina-e-animais.webp}" alt="menina com animais" className="img-menina" />
            <img src="{patinhas}" alt="patinhas de cachorro na tela" className="img-patinhas" />
            <img src="{pc}" alt="computador" className="img-pc" />
            <img src="{rodinha}" alt="rodinha de patinhas" className="img-rodinha" />
        </div> */}

      </div>
  )
}

export default Login