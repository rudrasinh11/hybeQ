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
  return (
    <div className="vura-product-card-modern">
      {/* Top Badges Row: Flex row to prevent overlap and clipping */}
      <div className="vura-card-badges-row">
        <span className="vura-badge-classification" title={product.badge}>
          {product.badge}
        </span>
        <span className="vura-badge-packaging" title={product.packaging}>
          {product.packaging}
        </span>
      </div>

      {/* Product Image Stage: Fixed 200px box with object-fit: contain */}
      <div className="vura-product-stage-box">
        <img
          src={getProductImage(product)}
          alt={product.name}
          className="vura-product-img-clean"
          loading="lazy"
        />
      </div>

      {/* Content Area: Flex-grow with uniform heights */}
      <div className="vura-card-content-area">
        <h3 className="vura-card-title">{product.name}</h3>
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
            to={`/products/${product.category}/${product.id}`}
            className="vura-card-btn-specs"
          >
            View Specs
          </Link>
          <button
            type="button"
            className="vura-card-btn-inquire"
            onClick={() => onOpenEnquiry(product.name)}
          >
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};
