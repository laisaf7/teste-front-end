import React from 'react';
import './Header.scss';
import logoImg from '../../assets/logo.svg';
import shieldIcon from '../../assets/shield.svg';
import truckIcon from '../../assets/truck.svg';
import cardIcon from '../../assets/creditCard.svg';
import shoppingCartIcon from '../../assets/shoppingCart.svg';
import userIcon from '../../assets/user.svg';
import heartIcon from '../../assets/heart.svg';
import boxIcon from '../../assets/box.svg';
import magnifyingGlassIcon from '../../assets/magnifyingGlass.svg';
import crownIcon from '../../assets/crown.svg';

export const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="top-bar">
        <span>
          <img src={shieldIcon} alt="" width="16" height="16" />
          Compra <strong>100% segura</strong>
        </span>
        <span>
          <img src={truckIcon} alt="" width="16" height="16" />
          <strong>Frete grátis</strong> acima de R$ 200
        </span>
        <span>
          <img src={cardIcon} alt="" width="16" height="16" />
          <strong>Parcele</strong> suas compras
        </span>
      </div>
      
      <div className="header-content">
        <img src={logoImg} alt="Econverse Logo" className="logo" />
        
        <div className="search-bar">
          <input type="text" placeholder="O que você está buscando?" aria-label="Buscar produtos" />
          <button type="button" aria-label="Buscar">
            <img src={magnifyingGlassIcon} alt="" />
          </button>
        </div>
        
        <div className="actions">
          <button aria-label="Caixa">
            <img src={boxIcon} alt="" />
          </button>
          <button aria-label="Favoritos">
            <img src={heartIcon} alt="" />
          </button>
          <button aria-label="Usuário">
            <img src={userIcon} alt="" />
          </button>
          <button aria-label="Carrinho">
            <img src={shoppingCartIcon} alt="" />
          </button>
        </div>
      </div>

      <nav className="main-nav" aria-label="Navegação principal">
        <ul>
          <li><a href="#todas">TODAS CATEGORIAS</a></li>
          <li><a href="#supermercado">SUPERMERCADO</a></li>
          <li><a href="#livros">LIVROS</a></li>
          <li><a href="#moda">MODA</a></li>
          <li><a href="#lancamentos">LANÇAMENTOS</a></li>
          <li className="highlight"><a href="#ofertas">OFERTAS DO DIA</a></li>
          <li>
            <a href="#assinatura">
              <img src={crownIcon} alt="" />
              ASSINATURA
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};