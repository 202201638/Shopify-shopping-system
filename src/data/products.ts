import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: 'Smartphone', count: 50 },
  { id: 'fashion', name: 'Fashion', icon: 'Shirt', count: 50 },
  { id: 'home', name: 'Home & Garden', icon: 'Home', count: 50 },
  { id: 'sports', name: 'Sports & Fitness', icon: 'Dumbbell', count: 50 },
  { id: 'books', name: 'Books & Media', icon: 'Book', count: 50 },
  { id: 'beauty', name: 'Beauty & Health', icon: 'Heart', count: 50 },
  { id: 'automotive', name: 'Automotive', icon: 'Car', count: 50 },
  { id: 'toys', name: 'Toys & Games', icon: 'Gamepad2', count: 50 },
];

// Generate 50 products for each category with multiple images
const generateProducts = (): Product[] => {
  const products: Product[] = [];
  
  const productTemplates = {
    electronics: [
      { 
        name: 'iPhone 15 Pro Max', 
        basePrice: 1199, 
        images: [
          'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
          'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
          'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg'
        ]
      },
      { 
        name: 'MacBook Air M3', 
        basePrice: 1299, 
        images: [
          'https://images.pexels.com/photos/18105/pexels-photo.jpg',
          'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
          'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg'
        ]
      },
      { 
        name: 'Sony Headphones', 
        basePrice: 349, 
        images: [
          'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
          'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
          'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
        ]
      },
      { 
        name: 'Samsung 4K TV', 
        basePrice: 899, 
        images: [
          'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg',
          'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
          'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg'
        ]
      },
      { 
        name: 'iPad Pro', 
        basePrice: 799, 
        images: [
          'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
          'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
          'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg'
        ]
      }
    ],
    fashion: [
      { 
        name: 'Leather Jacket', 
        basePrice: 299, 
        images: [
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
          'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg',
          'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
        ]
      },
      { 
        name: 'Designer Sunglasses', 
        basePrice: 189, 
        images: [
          'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg',
          'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg',
          'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg'
        ]
      },
      { 
        name: 'Casual Sneakers', 
        basePrice: 129, 
        images: [
          'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
          'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
          'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
        ]
      },
      { 
        name: 'Elegant Watch', 
        basePrice: 449, 
        images: [
          'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
          'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
          'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
        ]
      },
      { 
        name: 'Designer Handbag', 
        basePrice: 399, 
        images: [
          'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
          'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg',
          'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg'
        ]
      }
    ],
    home: [
      { 
        name: 'Coffee Table', 
        basePrice: 399, 
        images: [
          'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
          'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg'
        ]
      },
      { 
        name: 'Smart Speaker', 
        basePrice: 99, 
        images: [
          'https://images.pexels.com/photos/4790267/pexels-photo-4790267.jpeg',
          'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
          'https://images.pexels.com/photos/4790267/pexels-photo-4790267.jpeg'
        ]
      },
      { 
        name: 'Garden Tools', 
        basePrice: 79, 
        images: [
          'https://images.pexels.com/photos/4505461/pexels-photo-4505461.jpeg',
          'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
          'https://images.pexels.com/photos/4505461/pexels-photo-4505461.jpeg'
        ]
      },
      { 
        name: 'LED Desk Lamp', 
        basePrice: 59, 
        images: [
          'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg',
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
          'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg'
        ]
      },
      { 
        name: 'Dining Set', 
        basePrice: 899, 
        images: [
          'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
          'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg'
        ]
      }
    ],
    sports: [
      { 
        name: 'Yoga Mat', 
        basePrice: 49, 
        images: [
          'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg',
          'https://images.pexels.com/photos/4164764/pexels-photo-4164764.jpeg',
          'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg'
        ]
      },
      { 
        name: 'Dumbbells', 
        basePrice: 199, 
        images: [
          'https://images.pexels.com/photos/4164764/pexels-photo-4164764.jpeg',
          'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg',
          'https://images.pexels.com/photos/4164764/pexels-photo-4164764.jpeg'
        ]
      },
      { 
        name: 'Running Shoes', 
        basePrice: 149, 
        images: [
          'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
          'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
          'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
        ]
      },
      { 
        name: 'Fitness Tracker', 
        basePrice: 249, 
        images: [
          'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
          'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
          'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg'
        ]
      },
      { 
        name: 'Basketball', 
        basePrice: 29, 
        images: [
          'https://images.pexels.com/photos/4164764/pexels-photo-4164764.jpeg',
          'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg',
          'https://images.pexels.com/photos/4164764/pexels-photo-4164764.jpeg'
        ]
      }
    ],
    books: [
      { 
        name: 'Novel Collection', 
        basePrice: 29, 
        images: [
          'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
          'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg',
          'https://images.pexels.com/photos/1266139/pexels-photo-1266139.jpeg'
        ]
      },
      { 
        name: 'Photography Guide', 
        basePrice: 79, 
        images: [
          'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg',
          'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
          'https://images.pexels.com/photos/1266139/pexels-photo-1266139.jpeg'
        ]
      },
      { 
        name: 'Cookbook', 
        basePrice: 39, 
        images: [
          'https://images.pexels.com/photos/1266139/pexels-photo-1266139.jpeg',
          'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
          'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg'
        ]
      },
      { 
        name: 'Record Player', 
        basePrice: 299, 
        images: [
          'https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg',
          'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
          'https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg'
        ]
      },
      { 
        name: 'Art Book', 
        basePrice: 49, 
        images: [
          'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
          'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg',
          'https://images.pexels.com/photos/1266139/pexels-photo-1266139.jpeg'
        ]
      }
    ],
    beauty: [
      { 
        name: 'Skincare Set', 
        basePrice: 89, 
        images: [
          'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg',
          'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg',
          'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg'
        ]
      },
      { 
        name: 'Makeup Brushes', 
        basePrice: 49, 
        images: [
          'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg',
          'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg',
          'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg'
        ]
      },
      { 
        name: 'Oil Diffuser', 
        basePrice: 79, 
        images: [
          'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg',
          'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg',
          'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg'
        ]
      },
      { 
        name: 'Face Masks', 
        basePrice: 35, 
        images: [
          'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg',
          'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg',
          'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg'
        ]
      },
      { 
        name: 'Hair Dryer', 
        basePrice: 129, 
        images: [
          'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg',
          'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg',
          'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg'
        ]
      }
    ],
    automotive: [
      { 
        name: 'Car Phone Mount', 
        basePrice: 29, 
        images: [
          'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
          'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
          'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg'
        ]
      },
      { 
        name: 'Dash Camera', 
        basePrice: 149, 
        images: [
          'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
          'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg',
          'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg'
        ]
      },
      { 
        name: 'Car Charger', 
        basePrice: 19, 
        images: [
          'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
          'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
          'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg'
        ]
      },
      { 
        name: 'Floor Mats', 
        basePrice: 59, 
        images: [
          'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
          'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg'
        ]
      },
      { 
        name: 'Seat Covers', 
        basePrice: 89, 
        images: [
          'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
          'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg'
        ]
      }
    ],
    toys: [
      { 
        name: 'LEGO Set', 
        basePrice: 79, 
        images: [
          'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg',
          'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
          'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg'
        ]
      },
      { 
        name: 'Board Game', 
        basePrice: 39, 
        images: [
          'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg',
          'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
          'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg'
        ]
      },
      { 
        name: 'Action Figure', 
        basePrice: 29, 
        images: [
          'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg',
          'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
          'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg'
        ]
      },
      { 
        name: 'Puzzle', 
        basePrice: 19, 
        images: [
          'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg',
          'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
          'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg'
        ]
      },
      { 
        name: 'Remote Car', 
        basePrice: 89, 
        images: [
          'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg',
          'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
          'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg'
        ]
      }
    ]
  };

  categories.forEach(category => {
    const templates = productTemplates[category.id as keyof typeof productTemplates];
    
    for (let i = 0; i < 50; i++) {
      const template = templates[i % templates.length];
      const variation = Math.floor(i / templates.length) + 1;
      
      // Fix price calculation to ensure proper range
      const priceVariation = (Math.random() - 0.5) * 200; // -100 to +100
      const finalPrice = Math.max(template.basePrice + priceVariation, 10); // Minimum $10
      
      const product: Product = {
        id: `${category.id}-${i + 1}`,
        name: variation > 1 ? `${template.name} ${variation}` : template.name,
        price: Math.round(finalPrice * 100) / 100, // Round to 2 decimal places
        originalPrice: Math.random() > 0.7 ? Math.round((finalPrice + Math.random() * 300) * 100) / 100 : undefined,
        images: template.images,
        category: category.id,
        rating: Math.round((3.5 + Math.random() * 1.5) * 10) / 10, // 3.5 to 5.0
        reviews: Math.floor(Math.random() * 1000) + 50,
        description: `High-quality ${template.name.toLowerCase()} with premium features and excellent build quality. Perfect for everyday use with outstanding performance and durability.`,
        inStock: Math.random() > 0.1,
        featured: Math.random() > 0.8,
        sale: Math.random() > 0.7,
        specifications: {
          'Brand': 'Premium Brand',
          'Warranty': '1 Year',
          'Material': 'High Quality',
          'Color': 'Multiple Options'
        }
      };
      
      products.push(product);
    }
  });

  return products;
};

export const products = generateProducts();
export const featuredProducts = products.filter(product => product.featured);
export const saleProducts = products.filter(product => product.sale);