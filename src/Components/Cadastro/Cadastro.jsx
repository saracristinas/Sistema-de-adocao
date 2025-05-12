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
import axios from "axios";
import "./Cadastro.css";
import patinhas from "../../assets/patinhas.webp";

const Cadastro = () => {
  const [cpf, setCpf] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // ======================= MÁSCARA DE CPF =======================
  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 11); // Remove não números e limita a 11 dígitos

    // Aplica a máscara 000.000.000-00 com uma expressão só
    value = value.replace(
      /(\d{3})(\d{3})(\d{3})(\d{0,2})/,
      (match, p1, p2, p3, p4) => `${p1}.${p2}.${p3}${p4 ? `-${p4}` : ""}`
    );

    setCpf(value);
  };

  // ======================= MÁSCARA DE TELEFONE =======================
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 11); // Remove não números e limita a 11 dígitos

    // Aplica a máscara (00) 00000-0000 ou (00) 0000-0000
    value = value.replace(
      /^(\d{2})(\d{4,5})(\d{0,4})/,
      (match, ddd, meio, fim) => `(${ddd}) ${meio}${fim ? `-${fim}` : ""}`
    );

    setPhone(value);
  };

  // Função que formata a primeira letra maiúscula do nome
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Função que lida com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

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
        const usuarioCriado = response.data;

        alert(
          `Cadastro realizado com sucesso! Nome: ${usuarioCriado.name}, ID: ${usuarioCriado.id}`
        );

        // Salva o nome do usuário no localStorage para ser usado na Home
        localStorage.setItem("username", usuarioCriado.name);

        navigate("/login");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar usuário. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div className="background-image">
      <div className="cadastro-wrapper">
        <div className="image-side">
          <img src={patinhas} alt="Imagem de pets" className="pet-image" />
        </div>

        <form onSubmit={handleSubmit}>
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
              value={cpf}
              required
              onChange={handleCpfChange}
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
              value={phone}
              onChange={handlePhoneChange}
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
    </div>
  );
};

export default Cadastro;
