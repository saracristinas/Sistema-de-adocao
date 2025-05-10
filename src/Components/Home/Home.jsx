 master
import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

export default function Home({ username, onLogout }) {
  const [selectedPet, setSelectedPet] = useState(null);

  const pets = [
    { name: "Frajola", age: 2, type: "Gato", description: "Dócil", image: "/imagens/pet1.jpg" },
    { name: "Rex", age: 4, type: "Cão", description: "Brincalhão", image: "/imagens/pet2.jpg" },
    { name: "Bela", age: 1, type: "Gata", description: "Carinhosa", image: "/imagens/pet3.jpg" },
  ];

  const showPetDetails = (pet) => {
    setSelectedPet(pet);
  };

  const closePetDetails = () => {
    setSelectedPet(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closePetDetails();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);


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

 master
  return (
    <div className="home-container">
      <Header username={username} onLogout={onLogout} />

      <main className="content">
master
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
 master
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

  const saudacao = username
    ? `Olá, ${capitalizeName(username)}!`
    : "Olá, visitante. Bem-vindo à nossa plataforma!";

  return (
    <header className="header">
      <div className="header-left">
        <p>{saudacao}</p>
      </div>
      <div className="header-right">
        {username ? (
master
          <button onClick={onLogout} className="btn">Sair</button>
        ) : (
          <>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/cadastro" className="btn">Cadastrar</Link>

          <button onClick={onLogout}>Sair</button>
        ) : (
          <>
            <Link to="/login" className="header-link">Login</Link>
            <Link to="/cadastro" className="header-link">Cadastrar</Link>
 master
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
