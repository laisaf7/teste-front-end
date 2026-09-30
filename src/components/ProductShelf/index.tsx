import React, { useState, useRef } from 'react';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import type { ProductsResponse, Product } from '../../types';
import productsData from '../../data/products.json';
import './ProductShelf.scss';

interface ProductShelfProps {
  title: string;
  showTabs?: boolean;
}

export const ProductShelf: React.FC<ProductShelfProps> = ({ title, showTabs = false }) => {
  
  const data: ProductsResponse = productsData as ProductsResponse;
  const products = data.products;

  const tabs = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];
  const [activeTab, setActiveTab] = useState('CELULAR');

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.firstElementChild?.clientWidth || 0;
      carouselRef.current.scrollBy({ left: -(itemWidth + 20), behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.firstElementChild?.clientWidth || 0;
      carouselRef.current.scrollBy({ left: itemWidth + 20, behavior: 'smooth' });
    }
  };

  return (
    <div className="product-shelf">
      <h3 className="shelf-title">{title}</h3>
      
      {showTabs ? (
        <ul className="shelf-tabs">
          {tabs.map((tab) => (
            <li key={tab} className={activeTab === tab ? 'active' : ''}>
              <button onClick={() => setActiveTab(tab)}>{tab}</button>
            </li>
          ))}
        </ul>
      ) : (
        <a href="#" className="see-all-link">Ver todos</a>
      )}

      <div className="carousel-container">
        <button className="nav-arrow left" aria-label="Anterior" onClick={handleScrollLeft}>&lt;</button>
        <div className="products-grid" ref={carouselRef}>
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              onClick={(prod) => setSelectedProduct(prod)}
            />
          ))}
        </div>
        <button className="nav-arrow right" aria-label="Próximo" onClick={handleScrollRight}>&gt;</button>
      </div>
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};