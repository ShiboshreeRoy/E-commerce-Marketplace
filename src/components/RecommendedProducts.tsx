import React from 'react';
import { ProductCard } from './ProductCard';
import { Sparkles } from 'lucide-react';
import { products } from '../data/products';

export const RecommendedProducts: React.FC = () => {
  // Simulate personalized recommendations
  const recommendations = products.slice(0, 4);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="text-yellow-500" size={24} />
          <h2 className="text-xl font-bold">Recommended for You</h2>
        </div>
        <button className="text-blue-600 hover:text-blue-700">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recommendations.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};