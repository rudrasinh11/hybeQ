import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/productsData';
import { getProductImage } from '../data/productsData';

interface ProductCardProps {
  product: Product;
  onOpenEnquiry: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenEnquiry
}) => {
  const productUrl = `/products/${product.category}/${product.id}`;

  return (
    <article className="vura-product-card-modern vura-product-card-simple" aria-label={product.name}>

      {/* Product Image Stage: Clickable Link to Product Detail */}
      <Link
        to={productUrl}
        className="vura-product-stage-link"
        aria-label={`View ${product.name}`}
      >
        <div className="vura-product-stage-box">
          <img
            src={getProductImage(product)}
            alt={product.name}
            className="vura-product-img-clean"
            loading="lazy"
          />
        </div>
      </Link>

      {/* Content Area: Name + two actions only */}
      <div className="vura-card-content-area">
        <h3 className="vura-card-title">
          <Link to={productUrl} className="vura-card-title-link">
            {product.name}
          </Link>
        </h3>

        {/* Action Footer: View + Buy (Inquire) */}
        <div className="vura-card-action-footer">
          <Link
            to={productUrl}
            className="vura-card-btn-specs"
          >
            View
          </Link>
          <button
            type="button"
            className="vura-card-btn-inquire"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onOpenEnquiry(product.name);
            }}
            aria-label={`Buy / Inquire about ${product.name}`}
          >
            Buy
          </button>
        </div>
      </div>
    </article>
  );
};
