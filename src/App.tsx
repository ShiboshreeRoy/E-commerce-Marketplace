import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { SearchBar } from './components/SearchBar';
import { Filters } from './components/Filters';
import { CategoryMenu } from './components/CategoryMenu';
import { DiscountBanner } from './components/DiscountBanner';
import { LiveB2BSection } from './components/LiveB2BSection';
import { PrimeMembership } from './components/PrimeMembership';
import { RecommendedProducts } from './components/RecommendedProducts';
import { BuyAgain } from './components/BuyAgain';
import { Footer } from './components/Footer';
import { products } from './data/products';
import { FilterOptions } from './types';

function App() {
  const [filters, setFilters] = useState<FilterOptions>({
    minPrice: 0,
    maxPrice: 1000,
    categories: [],
    rating: null,
    freeShipping: false,
    verifiedSeller: false
  });

  const filteredProducts = products.filter(product => {
    if (filters.minPrice && product.price < filters.minPrice) return false;
    if (filters.maxPrice && product.price > filters.maxPrice) return false;
    if (filters.categories.length && !filters.categories.includes(product.category)) return false;
    if (filters.rating && product.rating < filters.rating) return false;
    if (filters.freeShipping && !product.shipping.free) return false;
    if (filters.verifiedSeller && !product.seller.verified) return false;
    return true;
  });

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <DiscountBanner />
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-center mb-8">
            <SearchBar />
          </div>

          <PrimeMembership />
          <RecommendedProducts />
          <BuyAgain />
          
          <div className="flex gap-8">
            <div className="w-64 space-y-6">
              <CategoryMenu />
              <Filters filters={filters} setFilters={setFilters} />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Featured Products</h1>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">
                    {filteredProducts.length} products found
                  </span>
                  <select className="border rounded-lg px-3 py-2">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating: High to Low</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="mb-12">
                <LiveB2BSection />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;