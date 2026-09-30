import React from 'react';
import './Brands.scss';
import logoImg from '../../assets/logo.svg';

export const Brands: React.FC = () => {
  return (
    <section className="brands-section" aria-labelledby="brands-title">
      <h3 id="brands-title">Navegue por marcas</h3>
      <div className="brands-carousel">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="brand-circle">
            <img src={logoImg} alt="Econverse logo" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};