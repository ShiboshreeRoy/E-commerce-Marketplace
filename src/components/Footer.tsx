import React from 'react';
import { Store, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Shield, Truck, CreditCard, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Trust badges */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Shield className="text-blue-500" size={24} />
              <div>
                <h4 className="font-semibold">Secure Payments</h4>
                <p className="text-sm text-gray-400">Protected by SSL</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="text-blue-500" size={24} />
              <div>
                <h4 className="font-semibold">Global Shipping</h4>
                <p className="text-sm text-gray-400">Fast & reliable delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="text-blue-500" size={24} />
              <div>
                <h4 className="font-semibold">Payment Options</h4>
                <p className="text-sm text-gray-400">Multiple payment methods</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-blue-500" size={24} />
              <div>
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-sm text-gray-400">Round the clock assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Store className="text-blue-500" size={24} />
              <span className="font-bold text-xl text-white">E-Marketplace</span>
            </div>
            <p className="text-sm mb-4">Your trusted B2B marketplace connecting businesses worldwide.</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@emarketplace.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Business Ave, NY 10001</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Seller Center</a></li>
              <li><a href="#" className="hover:text-blue-500">Buyer Protection</a></li>
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Business Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Trade Assurance</a></li>
              <li><a href="#" className="hover:text-blue-500">Business Identity</a></li>
              <li><a href="#" className="hover:text-blue-500">Logistics Services</a></li>
              <li><a href="#" className="hover:text-blue-500">Payment Solutions</a></li>
              <li><a href="#" className="hover:text-blue-500">Inspection Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-blue-500"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-500"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-500"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-500"><Linkedin size={20} /></a>
            </div>
            <h3 className="font-semibold text-white mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 E-Marketplace. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};