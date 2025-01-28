import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Star, Truck, Shield } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.shipping.free && (
          <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Free Shipping
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.minOrder > 1 && (
            <span className="text-sm text-gray-500">
              Min order: {product.minOrder} units
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Truck size={16} />
            {product.shipping.free ? 'Free shipping' : `$${product.shipping.price?.toFixed(2)} shipping`}
          </div>
          {product.seller.verified && (
            <div className="flex items-center gap-1 text-blue-600">
              <Shield size={16} />
              Verified Seller
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-medium">{product.seller.name}</span>
            <div className="flex items-center text-yellow-500">
              <Star size={14} fill="currentColor" />
              <span className="ml-1">{product.seller.rating}</span>
            </div>
          </div>
          <button
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};