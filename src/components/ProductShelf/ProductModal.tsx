import React, { useState } from 'react';
import type { Product } from '../../types';
import './ProductModal.scss';

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    const [quantity, setQuantity] = useState(1);

    const formatPrice = (value: number) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const increaseQty = () => setQuantity(prev => prev + 1);
    const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onClose} aria-label="Fechar">
            &times;
            </button>
            
            <div className="modal-body">
            <div className="modal-image">
                <img src={product.photo} alt={product.productName} />
            </div>
            
            <div className="modal-info">
                <h2>{product.productName}</h2>
                <strong className="price">{formatPrice(product.price)}</strong>
                
                <p className="description">
                {/* O layout possui um texto longo extra, mantendo a fidelidade */}
                Many desktop publishing packages and web page editors now many desktop publishing
                </p>
                
                <a href="#" className="details-link">Veja mais detalhes do produto &gt;</a>
                
                <div className="modal-actions">
                <div className="quantity-selector">
                    <button onClick={decreaseQty} aria-label="Diminuir quantidade">&minus;</button>
                    <span>{quantity.toString().padStart(2, '0')}</span>
                    <button onClick={increaseQty} aria-label="Aumentar quantidade">+</button>
                </div>
                <button className="buy-button-modal">COMPRAR</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };