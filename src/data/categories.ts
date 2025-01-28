import { Category } from '../types';
import { 
  Laptop, 
  Smartphone, 
  Watch, 
  Camera, 
  Headphones, 
  Shirt, 
  ShoppingBag, 
  Home 
} from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: 'Laptop',
    subcategories: ['Computers', 'Phones', 'Accessories', 'Audio']
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: 'Shirt',
    subcategories: ['Men', 'Women', 'Kids', 'Accessories']
  },
  {
    id: 'home',
    name: 'Home & Garden',
    icon: 'Home',
    subcategories: ['Furniture', 'Decor', 'Kitchen', 'Garden']
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: 'ShoppingBag',
    subcategories: ['Watches', 'Jewelry', 'Bags', 'Sunglasses']
  }
];