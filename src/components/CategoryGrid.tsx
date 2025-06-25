import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { categories } from '../data/products';

const CategoryGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of products across different categories. 
          From electronics to fashion, we have everything you need.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<any>;
          
          return (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.count} items</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Special offers banner */}
      <div className="mt-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Special Weekend Sale!</h3>
            <p className="text-emerald-100 mb-6">
              Get up to 50% off on selected items across all categories. 
              Limited time offer, shop now!
            </p>
            <Link 
              to="/"
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-block"
            >
              Shop Sale Items
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur rounded-xl p-6">
              <div className="text-center">
                <div className="text-4xl font-bold">50%</div>
                <div className="text-emerald-100">OFF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;