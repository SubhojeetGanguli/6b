import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Order, CartItem, Address, TrackingUpdate } from '../types';

// These types are already defined in the imported Order type
type OrderStatus = Order['status'];
type PaymentMethod = Order['paymentMethod'];



// Context type
interface OrderContextType {
  orders: Order[];
  createOrder: (items: CartItem[], total: number, paymentMethod: PaymentMethod, shippingAddress: Address) => string;
  getOrder: (orderId: string) => Order | undefined;
  getOrderByNumber: (orderNumber: string) => Order | undefined;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
}

const OrderContext = createContext<OrderContextType | null>(null);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const generateOrderNumber = () => 'SG' + Math.random().toString(36).slice(2, 11).toUpperCase();
const generateTrackingNumber = () => 'TRK' + Math.random().toString(36).slice(2, 14).toUpperCase();


  const createOrder = (items: CartItem[], total: number, paymentMethod: PaymentMethod, shippingAddress: Address): string => {
    const orderNumber = generateOrderNumber();
    const trackingNumber = generateTrackingNumber();
    const now = new Date();
    const estimatedDelivery = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

    const initialTracking: TrackingUpdate = {
      id: '1',
      status: 'Order Placed',
      description: 'Your order has been successfully placed and is being processed.',
      timestamp: now,
      location: 'Mumbai, Maharashtra',
    };

    const newOrder: Order = {
      id: Date.now().toString(),
      orderNumber,
      items,
      total,
      status: 'pending',
      paymentMethod,
      paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid',
      createdAt: now,
      estimatedDelivery,
      shippingAddress,
      trackingNumber,
      trackingUpdates: [initialTracking],
    };

    setOrders((prev) => [...prev, newOrder]);

    // Simulate updates
    setTimeout(() => updateOrderStatus(newOrder.id, 'confirmed'), 2000);
    setTimeout(() => updateOrderStatus(newOrder.id, 'processing'), 5000);
    setTimeout(() => updateOrderStatus(newOrder.id, 'shipped'), 8000);

    return orderNumber;
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id === orderId) {
          const statusMessages: Record<OrderStatus, string> = {
            confirmed: 'Order confirmed and payment verified.',
            processing: 'Your order is being prepared for shipment.',
            shipped: 'Your order has been shipped and is on its way.',
            'out-for-delivery': 'Your order is out for delivery.',
            delivered: 'Your order has been successfully delivered.',
            cancelled: 'Your order has been cancelled.',
            pending: 'Your order is pending confirmation.'
          };

          const newTracking: TrackingUpdate = {
            id: (order.trackingUpdates.length + 1).toString(),
            status: status.charAt(0).toUpperCase() + status.slice(1).replace(/-/g, ' '),
            description: statusMessages[status] || 'Order status updated.',
            timestamp: new Date(),
            location: 'Mumbai, Maharashtra',
          };

          return {
            ...order,
            status,
            trackingUpdates: [...order.trackingUpdates, newTracking],
          };
        }
        return order;
      })
    );
  };

  const getOrder = (orderId: string) => orders.find((order) => order.id === orderId);
  const getOrderByNumber = (orderNumber: string) => orders.find((order) => order.orderNumber === orderNumber);

  return (
    <OrderContext.Provider value={{ orders, createOrder, getOrder, getOrderByNumber, updateOrderStatus }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};
