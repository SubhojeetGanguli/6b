import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onCartClick: () => void;
  onLoginClick: () => void;
  onTrackingClick: () => void;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, onLoginClick, onTrackingClick, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { state } = useCart();
  const { auth, logout } = useAuth();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SG</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">SG Mart</span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </form>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Track Order Button */}
            <button
              onClick={onTrackingClick}
              className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Package className="w-5 h-5" />
              <span>Track Order</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {state.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              )}
            </button>

            {/* User Button */}
            {auth.isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors">
                  <User className="w-6 h-6" />
                  <span className="hidden md:inline">{auth.user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <button
                      onClick={onTrackingClick}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 md:hidden"
                    >
                      Track Orders
                    </button>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                <User className="w-6 h-6" />
                <span className="hidden md:inline">Login</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearchSubmit} className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </form>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="space-y-2">
              <button
                onClick={onTrackingClick}
                className="flex items-center space-x-2 w-full py-2 text-gray-700 hover:text-orange-500"
              >
                <Package className="w-5 h-5" />
                <span>Track Order</span>
              </button>
              <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Electronics</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Fashion</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Home & Kitchen</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Sports</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
