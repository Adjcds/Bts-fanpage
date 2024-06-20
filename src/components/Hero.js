import React from 'react';
import banner from '../assets/images/membros.jpeg';
import '../assets/styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src={banner} alt="BTS Banner" className="hero-image" />
        <div className="hero-text">
          <h1>Bem-vindo ao mundo do BTS!</h1>
          <p>Conheça o grupo que conquistou o mundo com sua música e talento.</p>
          <button>Saiba Mais</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
