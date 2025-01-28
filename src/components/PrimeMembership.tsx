import React from 'react';
import { Crown, Truck, Gift, Shield, Zap } from 'lucide-react';

export const PrimeMembership: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Crown className="text-yellow-700" size={24} />
        <h2 className="text-xl font-bold text-gray-900">Premium Membership</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white/80 rounded-lg p-4">
          <Truck className="text-yellow-700 mb-2" size={20} />
          <h3 className="font-semibold mb-1">Free Express Shipping</h3>
          <p className="text-sm text-gray-600">Next-day delivery on eligible items</p>
        </div>
        <div className="bg-white/80 rounded-lg p-4">
          <Gift className="text-yellow-700 mb-2" size={20} />
          <h3 className="font-semibold mb-1">Special Discounts</h3>
          <p className="text-sm text-gray-600">Exclusive deals and early access</p>
        </div>
        <div className="bg-white/80 rounded-lg p-4">
          <Shield className="text-yellow-700 mb-2" size={20} />
          <h3 className="font-semibold mb-1">Premium Protection</h3>
          <p className="text-sm text-gray-600">Extended warranty and returns</p>
        </div>
        <div className="bg-white/80 rounded-lg p-4">
          <Zap className="text-yellow-700 mb-2" size={20} />
          <h3 className="font-semibold mb-1">Priority Support</h3>
          <p className="text-sm text-gray-600">24/7 dedicated assistance</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/90 rounded-lg p-4">
        <div>
          <p className="font-semibold text-gray-900">Try Premium free for 30 days</p>
          <p className="text-sm text-gray-600">Then $29.99/month. Cancel anytime.</p>
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-2 rounded-full transition-colors">
          Start Free Trial
        </button>
      </div>
    </div>
  );
};