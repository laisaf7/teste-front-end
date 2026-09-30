// src/components/Partners/index.tsx
import React from 'react';
import './Partners.scss';

export const Partners: React.FC = () => {
  return (
    <section className="partners-section" aria-label="Parceiros">
      {[1, 2].map((item) => (
        <article key={item} className="partner-card">
          <div className="partner-content">
            <h3>Parceiros</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>CONFIRA</button>
          </div>
        </article>
      ))}
    </section>
  );
};