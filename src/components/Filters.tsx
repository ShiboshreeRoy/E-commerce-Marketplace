import React from 'react';
import { Star, Truck, Shield } from 'lucide-react';
import { categories } from '../data/categories';
import { FilterOptions } from '../types';

interface FiltersProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

export const Filters: React.FC<FiltersProps> = ({ filters, setFilters }) => {
  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      
      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice || ''}
            onChange={(e) => setFilters(prev => ({ ...prev, minPrice: Number(e.target.value) }))}
            className="w-1/2 px-2 py-1 border rounded"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice || ''}
            onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
            className="w-1/2 px-2 py-1 border rounded"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.categories.includes(category.id)}
                onChange={(e) => {
                  const newCategories = e.target.checked
                    ? [...filters.categories, category.id]
                    : filters.categories.filter(id => id !== category.id);
                  setFilters(prev => ({ ...prev, categories: newCategories }));
                }}
                className="rounded text-blue-600"
              />
              {category.name}
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Minimum Rating</h3>
        <div className="flex items-center gap-1">
          {[4, 3, 2, 1].map(rating => (
            <button
              key={rating}
              onClick={() => setFilters(prev => ({ ...prev, rating }))}
              className={`flex items-center gap-1 px-2 py-1 rounded ${
                filters.rating === rating ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'
              }`}
            >
              {rating}+ <Star size={16} fill={filters.rating === rating ? 'currentColor' : 'none'} />
            </button>
          ))}
        </div>
      </div>

      {/* Additional Filters */}
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.freeShipping}
            onChange={(e) => setFilters(prev => ({ ...prev, freeShipping: e.target.checked }))}
            className="rounded text-blue-600"
          />
          <Truck size={16} /> Free Shipping
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.verifiedSeller}
            onChange={(e) => setFilters(prev => ({ ...prev, verifiedSeller: e.target.checked }))}
            className="rounded text-blue-600"
          />
          <Shield size={16} /> Verified Seller
        </label>
      </div>
    </div>
  );
};