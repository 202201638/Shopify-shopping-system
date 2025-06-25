import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, CreditCard, Shield, Truck, RefreshCw } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Features Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform">
              <Truck className="h-10 w-10 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-400 text-sm">On orders over $50</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <RefreshCw className="h-10 w-10 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-400 text-sm">30-day return policy</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <Shield className="h-10 w-10 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-400 text-sm">100% secure checkout</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <Phone className="h-10 w-10 text-orange-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-400 text-sm">Customer service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Sopify</h2>
            <p className="text-gray-400 mb-6">
              Your one-stop destination for quality products at amazing prices. 
              We're committed to providing the best shopping experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/category/electronics" className="text-gray-400 hover:text-white transition-colors">Electronics</a></li>
              <li><a href="/category/fashion" className="text-gray-400 hover:text-white transition-colors">Fashion</a></li>
              <li><a href="/category/home" className="text-gray-400 hover:text-white transition-colors">Home & Garden</a></li>
              <li><a href="/category/sports" className="text-gray-400 hover:text-white transition-colors">Sports & Fitness</a></li>
              <li><a href="/category/books" className="text-gray-400 hover:text-white transition-colors">Books & Media</a></li>
              <li><a href="/category/beauty" className="text-gray-400 hover:text-white transition-colors">Beauty & Health</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>123 Shopping Street, Commerce City, CC 12345</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>support@sopify.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Sopify. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center space-x-4">
              <CreditCard className="h-6 w-6 text-gray-400" />
              <span className="text-gray-400 text-sm">We accept all major credit cards</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;