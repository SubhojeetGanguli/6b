import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Product } from '../types';
import { formatPrice, calculateDiscount } from '../utils/currency';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const discount = product.originalPrice ? calculateDiscount(product.originalPrice, product.price) : 0;

  return (
    <div 
      onClick={() => onProductClick(product)}
      className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            {discount}% OFF
          </div>
        )}
        
        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
        
        {/* Quick Add to Cart */}
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 p-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <Star className="w-4 h-4 fill-current text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
        
        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <span className={`text-xs px-2 py-1 rounded ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;