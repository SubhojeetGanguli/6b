import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AuthModal from './components/AuthModal';
import ProductDetail from './components/ProductDetail';
import OrderSuccess from './components/OrderSuccess';
import OrderTracking from './components/OrderTracking';
import Footer from './components/Footer';
import { products } from './data/products';
import { Product } from './types';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isOrderTrackingOpen, setIsOrderTrackingOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
  const [lastOrderNumber, setLastOrderNumber] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = (orderNumber: string) => {
    setLastOrderNumber(orderNumber);
    setIsCheckoutOpen(false);
    setIsOrderSuccessOpen(true);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTrackOrderFromSuccess = () => {
    setIsOrderSuccessOpen(false);
    setIsOrderTrackingOpen(true);
  };

  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <div className="min-h-screen bg-gray-50">
            <Header 
              onCartClick={() => setIsCartOpen(true)}
              onLoginClick={() => setIsAuthModalOpen(true)}
              onTrackingClick={() => setIsOrderTrackingOpen(true)}
              onSearch={handleSearch}
            />
            
            <main>
              <Hero />
              <ProductGrid 
                products={filteredProducts} 
                onProductClick={handleProductClick}
              />
            </main>

            <Footer />

            {/* Modals */}
            <Cart 
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              onCheckout={handleCheckout}
            />
            
            <Checkout 
              isOpen={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
              onOrderComplete={handleOrderComplete}
            />
            
            <AuthModal 
              isOpen={isAuthModalOpen}
              onClose={() => setIsAuthModalOpen(false)}
            />
            
            <ProductDetail 
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
            
            <OrderSuccess 
              isOpen={isOrderSuccessOpen}
              orderNumber={lastOrderNumber}
              onClose={() => setIsOrderSuccessOpen(false)}
              onTrackOrder={handleTrackOrderFromSuccess}
            />

            <OrderTracking 
              isOpen={isOrderTrackingOpen}
              onClose={() => setIsOrderTrackingOpen(false)}
            />
          </div>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;