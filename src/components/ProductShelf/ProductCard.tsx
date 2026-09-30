import React from 'react';
import type { Product } from '../../types/index';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const oldPrice = product.price * 1.1;
  const installmentValue = product.price / 2;

  return (
    <article className="product-card" onClick={() => onClick(product)}>
      <img src={product.photo} alt={product.productName} loading="lazy" />
      
      <div className="product-info">
        <p className="description">{product.descriptionShort}</p>
        <span className="old-price">{formatPrice(oldPrice)}</span>
        <strong className="new-price">{formatPrice(product.price)}</strong>
        <span className="installments">ou 2x de {formatPrice(installmentValue)} sem juros</span>
        <span className="frete-gratis">Frete grátis</span>
      </div>
      
      <button className="buy-button">COMPRAR</button>
    </article>
  );
};