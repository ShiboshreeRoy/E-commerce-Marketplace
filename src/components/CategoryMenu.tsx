import React from 'react';
import { categories } from '../data/categories';
import { ChevronRight } from 'lucide-react';

export const CategoryMenu: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-lg font-semibold p-4 border-b">Categories</h2>
      <div className="divide-y">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative p-4 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-gray-800">{category.name}</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>

            {/* Subcategories dropdown */}
            <div className="hidden group-hover:block absolute left-full top-0 ml-2 w-48 bg-white shadow-lg rounded-lg z-50">
              <div className="py-2">
                {category.subcategories.map((subcategory) => (
                  <div
                    key={subcategory}
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                  >
                    {subcategory}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};