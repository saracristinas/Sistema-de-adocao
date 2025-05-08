import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import "./Cadastro.css";
import { Link } from "react-router-dom";

const Cadastro = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        
        if (password !== confirmPassword) {
            alert("As senhas não coincidem");
        } else {
            alert("Cadastro realizado com sucesso!");
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
