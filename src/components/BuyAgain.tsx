import React from 'react';
import { History } from 'lucide-react';
import { products } from '../data/products';

export const BuyAgain: React.FC = () => {
  // Simulate previous purchases
  const previousPurchases = products.slice(0, 3);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <History className="text-blue-600" size={24} />
          <h2 className="text-xl font-bold">Buy Again</h2>
        </div>
        <button className="text-blue-600 hover:text-blue-700">View Order History</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {previousPurchases.map((product) => (
          <div key={product.id} className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold mb-1">{product.name}</h3>
              <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Buy Again
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};