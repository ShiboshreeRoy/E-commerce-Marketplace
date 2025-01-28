export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  seller: {
    name: string;
    rating: number;
    verified: boolean;
  };
  shipping: {
    free: boolean;
    price?: number;
    estimatedDays: number;
  };
  stock: number;
  minOrder: number;
  specifications: Record<string, string>;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
}

export interface FilterOptions {
  minPrice: number;
  maxPrice: number;
  categories: string[];
  rating: number | null;
  freeShipping: boolean;
  verifiedSeller: boolean;
}