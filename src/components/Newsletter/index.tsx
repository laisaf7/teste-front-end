// src/components/Newsletter/index.tsx
import React from 'react';
import './Newsletter.scss';

export const Newsletter: React.FC = () => {
  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter-text">
        <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
        <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
      </div>
      
      <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
        <div className="inputs-group">
          <input type="text" placeholder="Digite seu nome" required aria-label="Nome" />
          <input type="email" placeholder="Digite seu e-mail" required aria-label="E-mail" />
          <button type="submit">INSCREVER</button>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">Aceito os termos e condições</label>
        </div>
      </form>
    </section>
  );
};