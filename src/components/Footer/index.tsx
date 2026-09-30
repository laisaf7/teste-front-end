import React from 'react';
import './Footer.scss';
import logoImg from '../../assets/logo.svg';
import instagramIcon from '../../assets/instagram.svg';
import facebookIcon from '../../assets/facebook.svg';
import linkedinIcon from '../../assets/linkedin.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="company-info">
          <img src={logoImg} alt="Econverse Logo" className="footer-logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="social-links" aria-label="Redes Sociais">
            <a href="#" aria-label="Instagram">
              <img src={instagramIcon} alt="" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="" />
            </a>
          </div>
        </div>

        <nav className="footer-links" aria-label="Navegação Institucional">
          <div className="link-column">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h4>Ajuda</h4>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h4>Termos</h4>
            <ul>
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Troca e Devolução</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};