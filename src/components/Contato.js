import React from 'react';

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <h2>Contato</h2>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </form> 
    </section>
  );
}

export default Contato;
