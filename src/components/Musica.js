import React from 'react';
import '../assets/styles/Musica.css'; 

const Musica = () => {
  return (
    <section id="musica" className="video">
      <h2>Vídeo do BTS no YouTube</h2>
      <div className="video-container">
        <iframe
          width="800" 
          height="550" 
          src="https://www.youtube.com/embed/d1MmH0alF_hk3wRy" 
          title="Vídeo do BTS no YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Musica;
