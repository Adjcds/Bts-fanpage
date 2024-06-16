import React from 'react';
import banner from '../assets/images/membros.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img src={banner} alt="BTS Banner" />
      <h1>Bem-vindo ao mundo do BTS!</h1>
      <p>Conheça o grupo que conquistou o mundo com sua música e talento.</p>
      <button>Saiba Mais</button>
    </section>
  );
}

export default Hero;
