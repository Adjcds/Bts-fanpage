import React, { useState } from 'react';
import '../assets/styles/Header.css';
import BTSIcon from '../assets/images/icone.png'; // Caminho para a imagem do ícone

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={BTSIcon} alt="BTS Icon" />
        <h2>BTS</h2>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`menu ${menuAberto ? 'aberto' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#membros">Membros</a></li>
          <li><a href="#musica">Música</a></li>
          <li><a href="#cultura">Cultura</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
