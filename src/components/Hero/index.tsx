import React from 'react';
import './Hero.scss';
import tecIcon from '../../assets/tecnologia.svg';
import superIcon from '../../assets/supermercado.svg';
import bebidasIcon from '../../assets/bebidas.svg';
import ferramentasIcon from '../../assets/ferramentas.svg';
import saudeIcon from '../../assets/saude.svg';
import esportesIcon from '../../assets/esportes.svg';
import modaIcon from '../../assets/moda.svg';

export const Hero: React.FC = () => {
  const categories = [
    { name: 'Tecnologia', icon: tecIcon, active: true },
    { name: 'Supermercado', icon: superIcon, active: false },
    { name: 'Bebidas', icon: bebidasIcon, active: false },
    { name: 'Ferramentas', icon: ferramentasIcon, active: false },
    { name: 'Saúde', icon: saudeIcon, active: false },
    { name: 'Esportes e Fitness', icon: esportesIcon, active: false },
    { name: 'Moda', icon: modaIcon, active: false },
  ];

  return (
    <section className="hero-section">
      <div className="hero-banner" role="banner">
        <div className="hero-content">
          <h1>Venha conhecer nossas <br/> promoções</h1>
          <h2 className="hero-subtitle"><strong>50% Off</strong> nos produtos</h2>
          <button className="cta-button">Ver produto</button>
        </div>
      </div>
      
      <nav className="hero-categories" aria-label="Categorias em destaque">
        <ul>
          {categories.map((cat, index) => (
            <li key={index} className={cat.active ? 'active' : ''}>
              <div className="icon-box">
                <img src={cat.icon} alt={cat.name} width="48" height="48" />
            </div>
              <span className="category-name">{cat.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};