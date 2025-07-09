import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
              <Star className="w-4 h-4 fill-current" />
              <span>Trusted by 1M+ customers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Shop Smart,
              <br />
              <span className="text-orange-500">Save More</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Discover amazing deals on electronics, fashion, and home essentials. 
              Free delivery, easy returns, and cash on delivery available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors">
                View Categories
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1M+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Featured Products */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Featured Product"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Latest Smartphones</h3>
                  <p className="text-sm text-gray-600">Starting from ₹15,999</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm text-gray-600">4.8 rating</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Featured Product"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Premium Footwear</h3>
                  <p className="text-sm text-gray-600">Up to 50% off</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm text-gray-600">4.7 rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;