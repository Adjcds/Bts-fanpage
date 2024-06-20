import React, { useState } from 'react';
import '../assets/styles/Header.css';
import BTSIcon from '../assets/images/icone.png'; 

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={BTSIcon} alt="BTS Icon" />
        <h2>BTS Fanpage</h2>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`menu ${menuAberto ? 'aberto' : ''}`}>
        <ul>
          <li><a href="#home" onClick={fecharMenu}>Home</a></li>
          <li><a href="#membros" onClick={fecharMenu}>Membros</a></li>
          <li><a href="#musica" onClick={fecharMenu}>Música</a></li>
          <li><a href="#cultura" onClick={fecharMenu}>Cultura</a></li>
          <li><a href="#contato" onClick={fecharMenu}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
