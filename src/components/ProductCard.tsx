import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
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
    <article className="vura-product-card-modern" aria-label={product.name}>
      {/* Top Badges Row: Flex row to prevent overlap and clipping */}
      <div className="vura-card-badges-row">
        <span className="vura-badge-classification" title={product.badge}>
          {product.badge}
        </span>
        <span className="vura-badge-packaging" title={product.packaging}>
          {product.packaging}
        </span>
      </div>

      {/* Product Image Stage: Clickable Link to Product Detail */}
      <Link
        to={productUrl}
        className="vura-product-stage-link"
        aria-label={`View specifications for ${product.name}`}
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

      {/* Content Area: Flex-grow with uniform heights */}
      <div className="vura-card-content-area">
        <h3 className="vura-card-title">
          <Link to={productUrl} className="vura-card-title-link">
            {product.name}
          </Link>
        </h3>
        <span className="vura-card-category">{product.categoryLabel}</span>

        <p className="vura-card-desc-clamped">
          {product.shortDesc}
        </p>

        {/* Feature Bullets with HYBEQ Green Checkmarks */}
        <div className="vura-card-features-list">
          {product.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="vura-card-feature-item">
              <span className="vura-feature-check-icon">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Footer: Always pinned to bottom with horizontal alignment */}
        <div className="vura-card-action-footer">
          <Link
            to={productUrl}
            className="vura-card-btn-specs"
          >
            View Specs
          </Link>
          <button
            type="button"
            className="vura-card-btn-inquire"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onOpenEnquiry(product.name);
            }}
            aria-label={`Inquire about ${product.name}`}
          >
            Inquire
          </button>
        </div>
      </div>
    </article>
  );
};
