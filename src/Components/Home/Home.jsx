import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

export default function Home({ onLogout }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    if (savedName) {
      setUsername(savedName);
    }
  }, []);

  return (
    <div className="home-container">
      <Header username={username} onLogout={onLogout} />

      <main className="content">
        <h3>Pronto para encontrar seu novo amigo de quatro patas?</h3>

        <div className="card-grid">
          <div className="pet-card">
            <img src="/imagens/pet1.jpg" alt="Pet 1" />
            <h3>Frajola</h3>
            <p>Gato, 2 anos, dócil</p>
          </div>
          <div className="pet-card">
            <img src="/imagens/pet2.jpg" alt="Pet 2" />
            <h3>Rex</h3>
            <p>Cão, 4 anos, brincalhão</p>
          </div>
          <div className="pet-card">
            <img src="/imagens/pet3.jpg" alt="Pet 3" />
            <h3>Bela</h3>
            <p>Gata, 1 ano, carinhosa</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Header({ username, onLogout }) {
  const capitalizeName = (name) => {
    return name.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const saudacao = username
    ? `Olá, ${capitalizeName(username)}!`
    : "Olá, visitante! Bem-vindo à nossa plataforma 💖";

  return (
    <header className="header">
      <div className="header-left">
        <p>{saudacao}</p>
      </div>
      <div className="header-right">
        {username ? (
          <button onClick={onLogout}>Sair</button>
        ) : (
          <>
            <Link to="/login" className="header-link">Login</Link>
            <Link to="/cadastro" className="header-link">Cadastrar</Link>
          </>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>🐾 Transforme uma vida: adote um pet e ganhe um amigo para sempre.</p>
    </footer>
  );
}
