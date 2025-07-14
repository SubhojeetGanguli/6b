import React from 'react';
import { CheckCircle, Package, Truck, X, Eye } from 'lucide-react';

interface OrderSuccessProps {
  isOpen: boolean;
  orderNumber?: string;
  onClose: () => void;
  onTrackOrder: () => void;
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({ isOpen, orderNumber, onClose, onTrackOrder }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
          <p className="text-gray-600">Thank you for your order. We'll send you a confirmation email shortly.</p>
        </div>

        {orderNumber && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium">#{orderNumber}</span>
            </div>
          </div>
        )}

        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3">
            <Package className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-600">Your order is being prepared</span>
          </div>
          <div className="flex items-center space-x-3">
            <Truck className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">Estimated delivery: 2-3 business days</span>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onTrackOrder}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Eye className="w-5 h-5" />
            <span>Track Your Order</span>
          </button>
          <button
            onClick={onClose}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
