import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Membros from './components/Membros';
import Galeria from './components/Musica'; 
import Cultura from './components/Cultura';
import Contato from './components/Contato';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Membros />
      <Galeria />
      <Cultura />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
