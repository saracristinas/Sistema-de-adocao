import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cadastro.css";

const Cadastro = () => {
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
            localStorage.setItem("username", email);
            localStorage.setItem("nome", formattedUsername);
            localStorage.setItem("telefone", phone);

            alert("Cadastro realizado com sucesso!");

            // Redireciona para a página inicial após cadastro
            navigate("/home");
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Cadastro</h1>
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