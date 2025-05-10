// Cadastro.jsx
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaIdCard,
} from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Importando o axios
import "./Cadastro.css";
 master
import gatinhoImg from "../../assets/gatinho-login.svg";
import patinhas from "../../assets/patinhas.webp";


const Cadastro = () => {
    const [cpf, setCpf] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    // Função que formata a primeira letra maiúscula do nome
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // Função que lida com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("As senhas não coincidem");
        } else {
            // Formata o nome de usuário para a primeira letra maiúscula
            const formattedUsername = capitalizeFirstLetter(username);
            
            // Salva os dados no localStorage
            localStorage.setItem("cpf", cpf);
            localStorage.setItem("username", email);
            localStorage.setItem("nome", formattedUsername);
            localStorage.setItem("telefone", phone);

            alert("Cadastro realizado com sucesso!");

            // Redireciona para a página inicial após cadastro
            navigate("/home");
        }
    };

    return (
        <div className="background-image">
            
            <div className="gatinho-wrapper">
                <img src={gatinhoImg} alt="Gatinho" className="gatinho-topo" />
            </div>
            <form className="container" onSubmit={handleSubmit}>
                
                <h1>Cadastre-se!</h1>
                <h3>Os pets estão esperando</h3>

                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        placeholder="CPF"
                        required
                        onChange={(e) => setCpf(e.target.value)}
                    />
                    <FaIdCard className="icon" />
                </div>

                <div className="input-field">
                    <input
                        type="email"
                        placeholder="E-mail"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaEnvelope className="icon" />
                </div>

                <div className="input-field">
                    <input
                        type="tel"
                        placeholder="Telefone"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <FaPhoneAlt className="icon" />
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

                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Confirmar Senha"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>

                <div className="button-field">
                    <button type="submit">Cadastrar</button>
                </div>

                <div className="login-link">
                    <p>
                        Já tem uma conta? <Link to="/login">Login</Link>
                    </p>
                </div>
            </form>


const Cadastro = () => {
  const [cpf, setCpf] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // Função que formata a primeira letra maiúscula do nome
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validação das senhas
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      // Formata o nome de usuário para a primeira letra maiúscula
      const formattedUsername = capitalizeFirstLetter(username);

      // Prepara o objeto com os dados do usuário
      const novoUsuario = {
        name: formattedUsername,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        cpf: cpf,
        phone: phone,
      };

      // Envia os dados para o backend usando o axios
      const response = await axios.post(
        "http://localhost:8080/auth/register",
        novoUsuario
      );

      if (response.status === 201 || response.status === 200) {
        // A resposta agora contém os dados do usuário, incluindo o ID e o nome
        const usuarioCriado = response.data;

        // Exibe o nome e o ID do usuário no alerta
        alert(
          `Cadastro realizado com sucesso! Nome: ${usuarioCriado.name}, ID: ${usuarioCriado.id}`
        );

        localStorage.setItem("username", response.data.name);

        navigate("/home"); // Redireciona para a página inicial após cadastro
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar usuário. Verifique os dados e tente novamente.");
    }
  };
  return (
    <div className="background-image">
      {/* Tudo agora está dentro de um único contêiner */}
      
      <form className="container" onSubmit={handleSubmit}>
        <h1>Cadastre-se!</h1>
        <h3>Os pets estão esperando</h3>

        <div className="input-field">
          <input
            type="text"
            placeholder="Nome de usuário"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
 master
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="CPF"
            required
            onChange={(e) => setCpf(e.target.value)}
          />
          <FaIdCard className="icon" />
        </div>

        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaEnvelope className="icon" />
        </div>

        <div className="input-field">
          <input
            type="tel"
            placeholder="Telefone"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <FaPhoneAlt className="icon" />
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

        <div className="input-field">
          <input
            type="password"
            placeholder="Confirmar Senha"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="button-field">
          <button type="submit">Cadastrar</button>
        </div>

        <div className="login-link">
          <p>
            Já tem uma conta? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
