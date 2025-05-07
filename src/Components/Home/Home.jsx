import React from "react";
import "./Home.css";

export default function Home({ username, onLogout }) {
  return (
    <div className="home-container">
      <Header username={username} onLogout={onLogout} />

      <main className="content">
        <h3>Pronto para encontrar seu novo amigo de quatro patas?</h3>
        <p></p>

        {/* Cards de Pets */}
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
          {/* Adicionar mais cards conforme necessário */}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Header({ username, onLogout }) {
  return (
    <header className="header">
      <div className="header-left">
        <p>Olá, {username}</p>
      </div>
      <div className="header-right">
        <button onClick={onLogout}>Sair</button>
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
