import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Store, 
  MapPin, 
  ChevronDown, 
  Search, 
  Menu,
  User,
  Package,
  Heart,
  Clock,
  Settings,
  LogOut,
  Bell
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Cart } from './Cart';
import { categories } from '../data/categories';

export const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);
  const { state } = useCart();

  return (
    <nav className="bg-gray-900 text-white">
      {/* Top Navigation Bar */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-14">
            {/* Logo */}
            <div className="flex items-center gap-2 mr-8">
              <Store size={24} className="text-blue-400" />
              <span className="font-bold text-xl">E-Marketplace</span>
            </div>

            {/* Delivery Location */}
            <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-800 rounded-lg mr-4">
              <MapPin size={20} className="text-gray-300" />
              <div className="text-left">
                <div className="text-xs text-gray-400">Deliver to</div>
                <div className="text-sm font-medium">New York 10001</div>
              </div>
            </button>

            {/* Search Bar */}
            <div className="flex-1 max-w-3xl">
              <div className="flex">
                <div className="relative">
                  <button
                    onClick={() => setIsDepartmentsOpen(!isDepartmentsOpen)}
                    className="h-10 px-4 flex items-center gap-1 bg-gray-100 text-gray-700 rounded-l-lg hover:bg-gray-200"
                  >
                    All Departments
                    <ChevronDown size={16} />
                  </button>
                  {isDepartmentsOpen && (
                    <div className="absolute top-full left-0 w-56 mt-1 bg-white rounded-lg shadow-lg z-50">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Search products, brands, and categories..."
                  className="flex-1 h-10 px-4 text-gray-900 focus:outline-none"
                />
                <button className="h-10 px-6 bg-yellow-400 text-gray-900 rounded-r-lg hover:bg-yellow-500">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Right Navigation Items */}
            <div className="flex items-center ml-8 gap-4">
              {/* Account & Lists */}
              <div className="relative">
                <button
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  className="flex items-center gap-1 px-3 py-2 hover:bg-gray-800 rounded-lg"
                >
                  <div className="text-left">
                    <div className="text-xs">Hello, Sign in</div>
                    <div className="text-sm font-medium flex items-center gap-1">
                      Account & Lists <ChevronDown size={16} />
                    </div>
                  </div>
                </button>
                {isAccountOpen && (
                  <div className="absolute top-full right-0 w-64 mt-1 bg-white rounded-lg shadow-lg z-50">
                    <div className="p-4 border-b">
                      <button className="w-full px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500">
                        Sign in
                      </button>
                      <div className="text-center text-sm text-gray-600 mt-2">
                        New customer? <a href="#" className="text-blue-600 hover:underline">Start here</a>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="px-4 py-2 text-sm font-semibold text-gray-700">Your Account</div>
                      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                        <User size={16} /> Account
                      </button>
                      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                        <Package size={16} /> Orders
                      </button>
                      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                        <Heart size={16} /> Lists
                      </button>
                      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                        <Clock size={16} /> Recently Viewed
                      </button>
                      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                        <Settings size={16} /> Settings
                      </button>
                      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                        <LogOut size={16} /> Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Returns & Orders */}
              <button className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <div className="text-left">
                  <div className="text-xs">Returns</div>
                  <div className="text-sm font-medium">& Orders</div>
                </div>
              </button>

              {/* Notifications */}
              <button className="relative p-2 hover:bg-gray-800 rounded-lg">
                <Bell size={24} />
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  3
                </span>
              </button>

              {/* Cart */}
              <div className="relative">
                <button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-lg"
                >
                  <ShoppingCart size={24} />
                  <span className="font-medium">${state.total.toFixed(2)}</span>
                  {state.items.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                      {state.items.length}
                    </span>
                  )}
                </button>
                {isCartOpen && (
                  <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg z-50">
                    <Cart />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-10">
          <button className="flex items-center gap-2 px-3 py-1 hover:bg-gray-800 rounded-lg">
            <Menu size={20} />
            All
          </button>
          <div className="flex items-center gap-6 ml-4 text-sm">
            <a href="#" className="hover:text-blue-400">Today's Deals</a>
            <a href="#" className="hover:text-blue-400">Customer Service</a>
            <a href="#" className="hover:text-blue-400">Gift Cards</a>
            <a href="#" className="hover:text-blue-400">Sell</a>
            <a href="#" className="text-yellow-400 font-medium">Prime Day Deals</a>
          </div>
        </div>
      </div>
    </nav>
  );
};