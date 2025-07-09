import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Samsung Galaxy S24 Ultra',
    price: 124999,
    originalPrice: 134999,
    description: 'Latest flagship smartphone with AI-powered camera and S Pen',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    rating: 4.8,
    reviews: 2456,
    inStock: true,
    features: ['256GB Storage', '12GB RAM', '200MP Camera', 'S Pen Included']
  },
  {
    id: '2',
    name: 'Apple MacBook Air M3',
    price: 114900,
    originalPrice: 119900,
    description: 'Supercharged by M3 chip with 15-inch Liquid Retina display',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    rating: 4.9,
    reviews: 1823,
    inStock: true,
    features: ['M3 Chip', '8GB RAM', '256GB SSD', '15-inch Display']
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5 Headphones',
    price: 29990,
    originalPrice: 34990,
    description: 'Industry-leading noise canceling with premium sound quality',
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    rating: 4.7,
    reviews: 3421,
    inStock: true,
    features: ['30hr Battery', 'Noise Canceling', 'Quick Charge', 'Premium Sound']
  },
  {
    id: '4',
    name: 'Nike Air Max 270',
    price: 12995,
    originalPrice: 14995,
    description: 'Comfortable lifestyle shoe with Max Air cushioning',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion',
    rating: 4.6,
    reviews: 1567,
    inStock: true,
    features: ['Max Air Cushioning', 'Breathable Mesh', 'Durable Rubber Sole']
  },
  {
    id: '5',
    name: 'Levi\'s 511 Slim Jeans',
    price: 2999,
    originalPrice: 3999,
    description: 'Classic slim-fit jeans with modern stretch comfort',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion',
    rating: 4.4,
    reviews: 892,
    inStock: true,
    features: ['Slim Fit', 'Stretch Denim', 'Classic 5-Pocket', 'Machine Washable']
  },
  {
    id: '6',
    name: 'Instant Pot Duo 7-in-1',
    price: 8999,
    originalPrice: 10999,
    description: 'Multi-functional pressure cooker for quick and easy meals',
    image: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home & Kitchen',
    rating: 4.8,
    reviews: 2134,
    inStock: true,
    features: ['7-in-1 Functions', '6L Capacity', 'Stainless Steel', 'Smart Programs']
  },
  {
    id: '7',
    name: 'Dyson V11 Vacuum Cleaner',
    price: 45900,
    originalPrice: 49900,
    description: 'Powerful cordless vacuum with intelligent suction',
    image: 'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home & Kitchen',
    rating: 4.9,
    reviews: 1456,
    inStock: true,
    features: ['Cordless Design', '60min Runtime', 'HEPA Filter', 'LCD Display']
  },
  {
    id: '8',
    name: 'Adidas Ultraboost 23',
    price: 16999,
    originalPrice: 18999,
    description: 'Premium running shoe with responsive Boost cushioning',
    image: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion',
    rating: 4.7,
    reviews: 967,
    inStock: true,
    features: ['Boost Cushioning', 'Primeknit Upper', 'Continental Rubber', 'Energy Return']
  }
];

export const categories = [
  'All Categories',
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Sports',
  'Books',
  'Beauty'
];