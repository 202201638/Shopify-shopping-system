import { useState, useCallback } from 'react';
import { Order, CartItem } from '../types';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('sopify_orders');
    return saved ? JSON.parse(saved).map((order: any) => ({
      ...order,
      createdAt: new Date(order.createdAt)
    })) : [];
  });

  const createOrder = useCallback((userId: string, items: CartItem[], total: number, shippingAddress: string) => {
    const newOrder: Order = {
      id: `order-${Date.now()}`,
      userId,
      items,
      total,
      status: 'pending',
      createdAt: new Date(),
      shippingAddress
    };

    setOrders(prevOrders => {
      const updated = [newOrder, ...prevOrders];
      localStorage.setItem('sopify_orders', JSON.stringify(updated));
      return updated;
    });

    return newOrder;
  }, []);

  const updateOrderStatus = useCallback((orderId: string, status: Order['status']) => {
    setOrders(prevOrders => {
      const updated = prevOrders.map(order =>
        order.id === orderId ? { ...order, status } : order
      );
      localStorage.setItem('sopify_orders', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const getUserOrders = useCallback((userId: string) => {
    return orders.filter(order => order.userId === userId);
  }, [orders]);

  return {
    orders,
    createOrder,
    updateOrderStatus,
    getUserOrders
  };
};