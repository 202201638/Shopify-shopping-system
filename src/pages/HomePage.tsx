import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';
import { featuredProducts } from '../data/products';
import { Product } from '../types';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products with exceptional quality and value.
          </p>
        </div>
        
        <ProductGrid
          products={featuredProducts.slice(0, 8)}
          onAddToCart={onAddToCart}
        />
      </section>
    </main>
  );
};

export default HomePage;