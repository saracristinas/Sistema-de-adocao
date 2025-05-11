// ✅ IMPORTS DEVEM FICAR NO TOPO
import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';
import dog1Image from '../../assets/dog1teste.svg';
import dog2Image from '../../assets/Dog1.svg';

export default function Home({ onLogout }) {
  const [selectedPet, setSelectedPet] = useState(null);
  const [username, setUsername] = useState("");

  // ✅ Pets incluindo imagens importadas
  const pets = [
    { name: "Frajola", age: 2, type: "Gato", description: "Dócil", image: dog1Image },
    { name: "Rex", age: 4, type: "Cão", description: "Brincalhão", image: dog1Image },
    { name: "Bela", age: 1, type: "Gata", description: "Carinhosa", image: dog1Image },
    { name: "Bolt", age: 3, type: "Cão", description: "Ativo", image: dog1Image },
    { name: "Luna", age: 5, type: "Cadela", description: "Tranquila", image: dog2Image },
  ];

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    if (savedName) {
      setUsername(savedName);
    }
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedPet(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const showPetDetails = (pet) => setSelectedPet(pet);
  const closePetDetails = () => setSelectedPet(null);

  return (
    <div className="home-container">
      <Header username={username} onLogout={onLogout} />

      <main className="content">
        <h1 className="titulo">Pronto para encontrar seu novo amigo de quatro patas?</h1>
        <div className="card-grid">
          {pets.map((pet, index) => (
            <div key={index} className="pet-card">
              <img src={pet.image} alt={`Foto do pet ${pet.name}`} />
              <h3>{pet.name}</h3>
              <p>{pet.type}, {pet.age} anos, {pet.description}</p>
              <button onClick={() => showPetDetails(pet)}>Ver Detalhes</button>
            </div>
          ))}
        </div>
      </main>

      {selectedPet && (
        <div className="pet-detail-container">
          <div className="pet-detail-card">
            <span className="close-btn" onClick={closePetDetails}>×</span>
            <img src={selectedPet.image} alt={`Foto de ${selectedPet.name}`} />
            <h3>{selectedPet.name}</h3>
            <p>{selectedPet.type}, {selectedPet.age} anos</p>
            <p>{selectedPet.description}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

function Header({ username, onLogout }) {
  const capitalizeName = (name) => {
    return name.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const saudacao = `Olá, ${capitalizeName(username)}!`;

  return (
    <header className="header">
      <div className="header-left">
        <p>{saudacao}</p>
      </div>
      <div className="header-right">
        {username ? (
          <button onClick={onLogout} className="btn">Sair</button>
        ) : (
          <>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/cadastro" className="btn">Cadastrar</Link>
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
