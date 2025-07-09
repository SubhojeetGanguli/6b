import React, { useState } from 'react';
import { X, Package, Truck, CheckCircle, Clock, MapPin, Search } from 'lucide-react';
import { useOrders } from '../context/OrderContext';
import { formatPrice } from '../utils/currency';

interface OrderTrackingProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderTracking: React.FC<OrderTrackingProps> = ({ isOpen, onClose }) => {
  const [trackingInput, setTrackingInput] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const { orders, getOrderByNumber } = useOrders();

  const handleTrackOrder = () => {
    const order = getOrderByNumber(trackingInput);
    if (order) {
      setSelectedOrder(order.id);
    } else {
      alert('Order not found. Please check your order number.');
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
      case 'confirmed':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'processing':
        return <Package className="w-5 h-5 text-blue-500" />;
      case 'shipped':
      case 'out-for-delivery':
        return <Truck className="w-5 h-5 text-purple-500" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
      case 'confirmed':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
      case 'out-for-delivery':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const currentOrder = selectedOrder ? orders.find(order => order.id === selectedOrder) : null;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Order Tracking</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Track Order Input */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Track Your Order</h3>
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter your order number (e.g., SG123ABC456)"
                  value={trackingInput}
                  onChange={(e) => setTrackingInput(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button
                onClick={handleTrackOrder}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>Track</span>
              </button>
            </div>
          </div>

          {/* Recent Orders */}
          {orders.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
              <div className="grid gap-4">
                {orders.slice(-3).reverse().map((order) => (
                  <div
                    key={order.id}
                    onClick={() => setSelectedOrder(order.id)}
                    className="border border-gray-200 rounded-lg p-4 hover:border-orange-500 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium">#{order.orderNumber}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1).replace('-', ' ')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {order.createdAt.toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {order.items.length} item(s) • {formatPrice(order.total)}
                      </span>
                      <span className="text-sm text-orange-600 font-medium">View Details →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Order Details */}
          {currentOrder && (
            <div className="space-y-6">
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Order Details</h3>
                
                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Order Number</div>
                      <div className="font-medium">#{currentOrder.orderNumber}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Tracking Number</div>
                      <div className="font-medium">{currentOrder.trackingNumber}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Order Date</div>
                      <div className="font-medium">{currentOrder.createdAt.toLocaleDateString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Estimated Delivery</div>
                      <div className="font-medium">{currentOrder.estimatedDelivery.toLocaleDateString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Payment Method</div>
                      <div className="font-medium capitalize">{currentOrder.paymentMethod === 'cod' ? 'Cash on Delivery' : currentOrder.paymentMethod.toUpperCase()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Total Amount</div>
                      <div className="font-medium">{formatPrice(currentOrder.total)}</div>
                    </div>
                  </div>
                </div>

                {/* Tracking Timeline */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-4">Tracking Timeline</h4>
                  <div className="space-y-4">
                    {currentOrder.trackingUpdates.map((update, index) => (
                      <div key={update.id} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          {getStatusIcon(update.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h5 className="font-medium">{update.status}</h5>
                            <span className="text-sm text-gray-500">
                              {update.timestamp.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{update.description}</p>
                          {update.location && (
                            <div className="flex items-center space-x-1 mt-1">
                              <MapPin className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-500">{update.location}</span>
                            </div>
                          )}
                        </div>
                        {index < currentOrder.trackingUpdates.length - 1 && (
                          <div className="absolute left-6 mt-8 w-px h-8 bg-gray-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Items */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-4">Order Items</h4>
                  <div className="space-y-3">
                    {currentOrder.items.map((item) => (
                      <div key={item.product.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h5 className="font-medium">{item.product.name}</h5>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{formatPrice(item.product.price * item.quantity)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h4 className="font-semibold mb-4">Shipping Address</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-1">
                      <div className="font-medium">{currentOrder.shippingAddress.street}</div>
                      <div>{currentOrder.shippingAddress.city}, {currentOrder.shippingAddress.state}</div>
                      <div>{currentOrder.shippingAddress.pincode}, {currentOrder.shippingAddress.country}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {orders.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No orders found</p>
              <p className="text-gray-400 text-sm">Place your first order to start tracking</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;