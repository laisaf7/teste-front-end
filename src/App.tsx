import React from 'react';
import './styles/global.scss';

import { Header } from './components/Header/index';
import { Hero } from './components/Hero/index';
import { ProductShelf } from './components/ProductShelf/index';
import { Partners } from './components/Partners/index';
import { Brands } from './components/Brands/index';
import { Newsletter } from './components/Newsletter/index';
import { Footer } from './components/Footer/index';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section aria-labelledby="related-products-title-1">
          <ProductShelf title="Produtos relacionados" showTabs={true} />
        </section>
        <Partners />
        <section aria-labelledby="related-products-title-2">
          <ProductShelf title="Produtos relacionados" />
        </section>
        <Partners />
        <Brands />
        <section aria-labelledby="related-products-title-2">
          <ProductShelf title="Produtos relacionados" />
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
};