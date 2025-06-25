import React from 'react';
import { ArrowRight, Star, Zap, Shield, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-in slide-in-from-left duration-1000">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Amazing Products at
              <span className="text-yellow-400 animate-pulse"> Great Prices</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Shop from thousands of products across multiple categories. 
              Fast shipping, great customer service, and unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/category/electronics"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Shop Electronics
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/category/fashion"
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 text-center"
              >
                Browse Fashion
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center transform hover:scale-110 transition-transform">
                <Truck className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <p className="text-sm">Free Shipping</p>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <p className="text-sm">Secure Payment</p>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <p className="text-sm">Fast Delivery</p>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <Star className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <p className="text-sm">Top Rated</p>
              </div>
            </div>
          </div>

          {/* Right content - Featured product showcase */}
          <div className="relative animate-in slide-in-from-right duration-1000">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-6">Today's Hot Deals</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors">
                  <img 
                    src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg"
                    alt="iPhone"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold">iPhone 15 Pro Max</h4>
                    <p className="text-yellow-400 animate-pulse">Save $100 Today!</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors">
                  <img 
                    src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
                    alt="Headphones"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold">Sony Headphones</h4>
                    <p className="text-yellow-400 animate-pulse">Limited Time Offer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors">
                  <img 
                    src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
                    alt="Jacket"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold">Leather Jacket</h4>
                    <p className="text-yellow-400 animate-pulse">25% Off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;