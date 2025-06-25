import { useState, useCallback } from 'react';
import { WishlistItem, Product } from '../types';

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => {
    const saved = localStorage.getItem('sopify_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const addToWishlist = useCallback((product: Product) => {
    setWishlistItems(prevItems => {
      const exists = prevItems.find(item => item.product.id === product.id);
      if (exists) return prevItems;
      
      const newItem: WishlistItem = {
        id: `wishlist-${Date.now()}`,
        product,
        addedAt: new Date()
      };
      
      const updated = [...prevItems, newItem];
      localStorage.setItem('sopify_wishlist', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setWishlistItems(prevItems => {
      const updated = prevItems.filter(item => item.product.id !== productId);
      localStorage.setItem('sopify_wishlist', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const isInWishlist = useCallback((productId: string) => {
    return wishlistItems.some(item => item.product.id === productId);
  }, [wishlistItems]);

  const clearWishlist = useCallback(() => {
    setWishlistItems([]);
    localStorage.removeItem('sopify_wishlist');
  }, []);

  return {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist
  };
};