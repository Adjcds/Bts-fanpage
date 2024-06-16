
import React from 'react';
import '../assets/styles/Membros.css'; 
import membro1 from '../assets/images/membro1.jpeg';
import membro2 from '../assets/images/membro2.jpeg';
import membro3 from '../assets/images/membro3.jpeg';
import membro4 from '../assets/images/membro4.jpeg';
import membro5 from '../assets/images/membro5.jpeg';
import membro6 from '../assets/images/membro6.jpeg';
import membro7 from '../assets/images/membro7.jpeg';

const Membros = () => {
  const membros = [
    { id: 1, name: 'Park Ji-min', img: membro1 },
    { id: 2, name: 'Jeon Jung-kook', img: membro2 },
    { id: 3, name: 'Kim Tae-hyung', img: membro3 },
    { id: 4, name: 'Suga', img: membro4 },
    { id: 5, name: 'Kim Seok-jin', img: membro5 },
    { id: 6, name: 'Kim Namjoon', img: membro6 },
    { id: 7, name: 'J-Hope', img: membro7 }
  ];

  return (
    <section id="membros" className="membros">
      <h2>Membros do BTS</h2>
      <div className="membros-container">
        {membros.map(membro => (
          <div key={membro.id} className="membro">
            <img src={membro.img} alt={membro.name} />
            <h3>{membro.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Membros;
