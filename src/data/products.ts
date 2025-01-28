export const products = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with active noise cancellation, 40-hour battery life, and premium sound quality. Perfect for music enthusiasts and professionals.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    category: 'electronics',
    rating: 4.8,
    reviews: 256,
    seller: {
      name: 'TechPro Electronics',
      rating: 4.9,
      verified: true
    },
    shipping: {
      free: true,
      estimatedDays: 3
    },
    stock: 150,
    minOrder: 1,
    specifications: {
      'Battery Life': '40 hours',
      'Bluetooth Version': '5.2',
      'Noise Cancellation': 'Active',
      'Driver Size': '40mm',
      'Weight': '250g'
    }
  },
  {
    id: '2',
    name: 'Minimalist Watch',
    description: 'Elegant timepiece with genuine leather strap, sapphire crystal, and Swiss movement. Water-resistant up to 50m.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    category: 'accessories',
    rating: 4.6,
    reviews: 189,
    seller: {
      name: 'LuxWatch Co.',
      rating: 4.7,
      verified: true
    },
    shipping: {
      free: false,
      price: 9.99,
      estimatedDays: 5
    },
    stock: 75,
    minOrder: 1,
    specifications: {
      'Movement': 'Swiss Quartz',
      'Case Material': 'Stainless Steel',
      'Band Material': 'Genuine Leather',
      'Water Resistance': '50m',
      'Case Size': '40mm'
    }
  },
  {
    id: '3',
    name: 'Smart Fitness Tracker',
    description: 'Advanced fitness tracking with heart rate monitoring, sleep analysis, and 20+ sport modes. Compatible with iOS and Android.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800',
    category: 'electronics',
    rating: 4.7,
    reviews: 342,
    seller: {
      name: 'FitTech Gear',
      rating: 4.8,
      verified: true
    },
    shipping: {
      free: true,
      estimatedDays: 2
    },
    stock: 200,
    minOrder: 1,
    specifications: {
      'Display': 'AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': 'IP68',
      'Sensors': 'Heart Rate, SpO2',
      'Compatibility': 'iOS 12+, Android 8+'
    }
  },
  {
    id: '4',
    name: 'Designer Sunglasses',
    description: 'Premium UV protection sunglasses with polarized lenses and durable titanium frame. Includes leather case.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
    category: 'accessories',
    rating: 4.5,
    reviews: 156,
    seller: {
      name: 'OpticStyle',
      rating: 4.6,
      verified: false
    },
    shipping: {
      free: false,
      price: 4.99,
      estimatedDays: 4
    },
    stock: 100,
    minOrder: 2,
    specifications: {
      'Frame Material': 'Titanium',
      'Lens Type': 'Polarized',
      'UV Protection': 'UV400',
      'Frame Size': 'Medium',
      'Style': 'Aviator'
    }
  }
];