import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { products, categories } from '../data/products';
import { Product } from '../types';

interface CategoryPageProps {
  onAddToCart: (product: Product) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ onAddToCart }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const categoryProducts = useMemo(() => {
    return products.filter(product => product.category === categoryId);
  }, [categoryId]);

  const category = categories.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <p className="text-gray-600">The category you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
        <p className="text-gray-600 text-lg">
          Explore our collection of {category.count} premium {category.name.toLowerCase()} products
        </p>
      </div>

      {/* Category Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 mb-8 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Special {category.name} Deals</h2>
            <p className="text-blue-100 mb-6">
              Get up to 40% off on selected {category.name.toLowerCase()} items. 
              Limited time offer with free shipping!
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 font-semibold">
                Free Shipping
              </span>
              <span className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 font-semibold">
                Easy Returns
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur rounded-xl p-6">
              <div className="text-center">
                <div className="text-4xl font-bold">40%</div>
                <div className="text-blue-100">OFF</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <ProductGrid
        products={categoryProducts}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default CategoryPage;