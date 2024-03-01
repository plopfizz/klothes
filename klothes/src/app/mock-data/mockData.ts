import {
  DifferentCategories,
  Genders,
  ProductTypes,
} from '../enums/gender.enum';
import { productType } from '../interfaces/clothes.interface';
import { Product } from '../interfaces/product.interface';

export const products: productType[] = [
  {
    name: 'All Footwear',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN, Genders.MEN],
  },

  {
    name: 'Boots',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN],
  },

  // Booties
  {
    name: 'Booties',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN],
  },

  // Espadrilles
  {
    name: 'Espadrilles',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN],
  },

  // Evening Shoes
  {
    name: 'Evening Shoes',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN],
  },

  // Flats
  {
    name: 'Flats',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN],
  },

  // Mules & Clogs
  {
    name: 'Mules & Clogs',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN],
  },

  // Platforms
  {
    name: 'Platforms',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN],
  },

  // Pumps
  {
    name: 'Pumps',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN],
  },

  // Sandals
  {
    name: 'Sandals',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN],
  },

  // Slingback
  {
    name: 'Slingback',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN],
  },

  // Sneakers & Athletic
  {
    name: 'Sneakers & Athletic',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN],
  },

  // Wedges
  {
    name: 'Wedges',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN],
  },

  // Sale Shoes
  {
    name: 'Sale Shoes',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.WOMEN],
  },

  // BRANDS WE LOVE - Type
  // {
  //   name: 'BRANDS WE LOVE',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // Valentino Garavani
  // {
  //   name: 'Valentino Garavani',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // Converse
  // {
  //   name: 'Converse',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // // Bottega Veneta
  // {
  //   name: 'Bottega Veneta',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // // Gucci
  // {
  //   name: 'Gucci',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // {
  //   name: 'Golden Goose',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // NEW ARRIVALS - Type
  // {
  //   name: 'NEW ARRIVALS',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.WOMEN],
  // },

  // Ankle Boots
  // {
  //   name: 'Ankle Boots',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.WOMEN],
  // },

  // {
  //   name: 'Loafers',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.WOMEN],
  // },

  // {
  //   name: 'Mules',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.WOMEN],
  // },

  // {
  //   name: 'Sandals',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.WOMEN],
  // },

  // {
  //   name: 'Black Designers',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.DISCOVER,
  //   gender: [Genders.WOMEN],
  // },
  // {
  //   name: 'Asian Designers',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.DISCOVER,
  //   gender: [Genders.WOMEN],
  // },
  // Include other discovery items...

  // MOST FAVORITED - Type
  // {
  //   name: 'MOST FAVORITED',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.MOST_FAVORITED,
  //   gender: [Genders.WOMEN],
  // },

  // Sneakers
  // {
  //   name: 'Sneakers',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.MOST_FAVORITED,
  //   gender: [Genders.WOMEN],
  // },

  // Platforms
  // {
  //   name: 'Platforms',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.MOST_FAVORITED,
  //   gender: [Genders.WOMEN],
  // },

  // Oxfords
  // {
  //   name: 'Oxfords',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.MOST_FAVORITED,
  //   gender: [Genders.WOMEN],
  // },

  {
    name: 'Boots',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.MEN],
  },

  // Lace-up Shoes
  {
    name: 'Lace-up Shoes',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.MEN],
  },

  // Sandals & Slides
  {
    name: 'Sandals & Slides',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.MEN],
  },

  // Slip-ons & Loafers
  {
    name: 'Slip-ons & Loafers',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.MEN],
  },

  // Sneakers & Athletic Shoes
  {
    name: 'Sneakers & Athletic Shoes',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.MEN],
  },

  // Sale Shoes
  {
    name: 'Sale Shoes',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.MEN],
  },

  // BRANDS WE LOVE - Type
  // {
  //   name: 'BRANDS WE LOVE',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.SHOES,
  //   gender: [Genders.MEN],
  // },

  // Off-White
  {
    name: 'Off-White',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.MEN],
  },

  // Balenciaga
  {
    name: 'Balenciaga',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.MEN],
  },

  // Nike
  {
    name: 'Nike',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.MEN],
  },

  // Gucci
  {
    name: 'Gucci',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.MEN],
  },

  // Bottega Veneta
  {
    name: 'Bottega Veneta',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.SHOES,
    gender: [Genders.MEN],
  },

  // NEW ARRIVALS - Type
  // {
  //   name: 'Converse',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.MEN],
  // },

  // // Sneakers
  // {
  //   name: 'Sneakers',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.MEN],
  // },

  // // Loafers
  // {
  //   name: 'Loafers',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.MEN],
  // },

  // // Sandals
  // {
  //   name: 'Sandals',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.MEN],
  // },

  // // DISCOVER
  // {
  //   name: 'Black Designers',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.DISCOVER,
  //   gender: [Genders.MEN],
  // },
  // {
  //   name: 'Asian Designers',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.DISCOVER,
  //   gender: [Genders.MEN],
  // },
  // // Include other discovery items...

  // // MOST FAVORITED - Type
  // {
  //   name: 'Vans',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.MOST_FAVORITED,
  //   gender: [Genders.MEN,Genders.KID],
  // },

  // // High Top Sneakers
  // {
  //   name: 'High Top Sneakers',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.MOST_FAVORITED,
  //   gender: [Genders.MEN],
  // },

  // // Slides
  // {
  //   name: 'Slides',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.MOST_FAVORITED,
  //   gender: [Genders.MEN],
  // },

  // // Chelsea Boots
  // {
  //   name: 'Chelsea Boots',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.MOST_FAVORITED,
  //   gender: [Genders.MEN],
  // },
  {
    name: 'All Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },

  // Evening Dresses
  {
    name: 'Evening Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },

  // Cocktail Dresses
  {
    name: 'Cocktail Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },

  // Floral Dresses
  {
    name: 'Floral Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },

  // Day Dresses
  {
    name: 'Day Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },

  // Casual Dresses
  {
    name: 'Casual Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },

  // Printed Dresses
  {
    name: 'Printed Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },

  // Formal Dresses
  {
    name: 'Formal Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },

  // Party Dresses
  {
    name: 'Party Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },

  // Day to Night Dresses
  {
    name: 'Day to Night Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },

  // Bridal Dresses
  {
    name: 'Bridal Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },

  // BY LENGTH - Type
  // {
  //   name: 'BY LENGTH',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BY_LENGTH,
  //   gender: [Genders.WOMEN],
  // },

  // Maxi Dresses
  // {
  //   name: 'Maxi Dresses',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BY_LENGTH,
  //   gender: [Genders.WOMEN],
  // },

  // // Midi Dresses
  // {
  //   name: 'Midi Dresses',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BY_LENGTH,
  //   gender: [Genders.WOMEN],
  // },

  // // Mini Dresses
  // {
  //   name: 'Mini Dresses',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BY_LENGTH,
  //   gender: [Genders.WOMEN],
  // },

  // // Knee Length Dresses
  // {
  //   name: 'Knee Length Dresses',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BY_LENGTH,
  //   gender: [Genders.WOMEN],
  // },

  // // David Koma Dresses
  // {
  //   name: 'David Koma Dresses',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // // Versace Dresses
  // {
  //   name: 'Versace Dresses',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // // Samantha Sung Dresses
  // {
  //   name: 'Samantha Sung Dresses',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // // Alexander McQueen Dresses
  // {
  //   name: 'Alexander McQueen Dresses',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // // Valentino Dresses
  // {
  //   name: 'Valentino Dresses',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // // St. John Dresses
  // {
  //   name: 'St. John Dresses',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // // Oscar De La Renta Dresses
  // {
  //   name: 'Oscar De La Renta Dresses',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // // Red Valentino Dresses
  // {
  //   name: 'Red Valentino Dresses',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },
  // For Men
  {
    name: 'All Clothing',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Activewear',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Coats',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Jackets',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN, Genders.WOMEN],
  },
  {
    name: 'Jeans',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Pants',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Shirts',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Shorts',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Sleepwear',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Sport Coats & Blazers',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Suits',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Sweaters',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Sweatshirts & Hoodies',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Swimwear',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Ties',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Underwear & Socks',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Big & Tall',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: "Young Mens'",
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },
  {
    name: 'Sale Clothing',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.MEN],
  },

  // // Brands We Love
  // {
  //   name: 'Amiri',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.MEN],
  // },
  // {
  //   name: 'Thom Browne',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.MEN],
  // },
  // {
  //   name: 'Rick Owens',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.MEN],
  // },
  // {
  //   name: 'Balenciaga',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.MEN, Genders.WOMEN],
  // },
  // {
  //   name: 'Gucci',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.MEN, Genders.WOMEN],
  // },

  // New Arrivals
  // {
  //   name: 'T-shirts',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.MEN],
  // },
  // {
  //   name: 'Outerwear',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.MEN, Genders.WOMEN],
  // },
  // {
  //   name: 'Swimsuits',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.MEN],
  // },
  // {
  //   name: 'Distressed Jeans',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.MEN],
  // },

  // // Discover
  // {
  //   name: 'Black Designers',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.DISCOVER,
  //   gender: [Genders.MEN, Genders.WOMEN],
  // },
  // {
  //   name: 'Asian Designers',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.DISCOVER,
  //   gender: [Genders.MEN, Genders.WOMEN],
  // },
  // {
  //   name: 'LGBTQIA+ Designers',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.DISCOVER,
  //   gender: [Genders.MEN, Genders.WOMEN],
  // },
  // {
  //   name: 'LatinX Designers',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.DISCOVER,
  //   gender: [Genders.MEN, Genders.WOMEN],
  // },
  // {
  //   name: 'Pre-owned',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.DISCOVER,
  //   gender: [Genders.MEN, Genders.WOMEN],
  // },

  // // Most Favorited
  // {
  //   name: 'Sweatshirts',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.MOST_FAVORITED,
  //   gender: [Genders.MEN],
  // },
  // {
  //   name: 'Outerwear',
  //   productType: ProductTypes.CLOTHING,
  //   type: DifferentCategories.MOST_FAVORITED,
  //   gender: [Genders.MEN, Genders.WOMEN],
  // },

  // For Women
  {
    name: 'All Clothing',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },
  {
    name: 'Activewear',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },
  {
    name: 'Coats',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },
  {
    name: 'Dresses',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },
  {
    name: 'Jeans',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },
  {
    name: 'Jumpsuits & Rompers',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },
  {
    name: 'Lingerie',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },
  {
    name: 'Pants',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.CLOTHING,
    gender: [Genders.WOMEN],
  },
];

export const mockProductData: Product[] = [
  {
    brand: 'Nike',
    title: 'Air Jordan 1 Retro High',
    subTitle: 'Basketball Shoes',
    price: 180,
    sizes: [
      { sizeNumber: 7, isAvailable: true },
      { sizeNumber: 8, isAvailable: true },
      { sizeNumber: 9, isAvailable: true },
    ],
    productImages: [
      'url Link1',
      'url Link2',
      'url Link3',
      'url Link4',
      'url Link5',
    ],
    color: 'Black',
  },
  {
    brand: 'Adidas',
    title: 'UltraBoost 21',
    subTitle: 'Running Shoes',
    price: 180,
    sizes: [
      { sizeNumber: 7, isAvailable: true },
      { sizeNumber: 8, isAvailable: false },
      { sizeNumber: 9, isAvailable: true },
    ],
    productImages: [
      'url Link6',
      'url Link7',
      'url Link8',
      'url Link9',
      'url Link10',
    ],
    color: 'White',
  },
  {
    brand: 'Puma',
    title: 'RS-X3 Puzzle',
    subTitle: 'Sneakers',
    price: 110,
    sizes: [
      { sizeNumber: 8, isAvailable: true },
      { sizeNumber: 9, isAvailable: true },
      { sizeNumber: 10, isAvailable: true },
    ],
    productImages: [
      'url Link11',
      'url Link12',
      'url Link13',
      'url Link14',
      'url Link15',
    ],
    color: 'Blue',
  },
  {
    brand: 'Nike',
    title: 'Air Max 270',
    subTitle: 'Casual Shoes',
    price: 150,
    sizes: [
      { sizeNumber: 7, isAvailable: true },
      { sizeNumber: 8, isAvailable: true },
      { sizeNumber: 9, isAvailable: false },
    ],
    productImages: [
      'url Link16',
      'url Link17',
      'url Link18',
      'url Link19',
      'url Link20',
    ],
    color: 'White',
  },
  {
    brand: 'Adidas',
    title: 'NMD R1',
    subTitle: 'Sneakers',
    price: 130,
    sizes: [
      { sizeNumber: 7, isAvailable: true },
      { sizeNumber: 8, isAvailable: true },
      { sizeNumber: 9, isAvailable: true },
    ],
    productImages: [
      'url Link21',
      'url Link22',
      'url Link23',
      'url Link24',
      'url Link25',
    ],
    color: 'Black',
  },
  {
    brand: 'Puma',
    title: 'Cali Sport',
    subTitle: "Women's Sneakers",
    price: 100,
    sizes: [
      { sizeNumber: 6, isAvailable: true },
      { sizeNumber: 7, isAvailable: true },
      { sizeNumber: 8, isAvailable: false },
    ],
    productImages: [
      'url Link26',
      'url Link27',
      'url Link28',
      'url Link29',
      'url Link30',
    ],
    color: 'White',
  },
  {
    brand: 'Adidas',
    title: 'Stan Smith',
    subTitle: 'Originals Shoes',
    price: 85,
    sizes: [
      { sizeNumber: 7, isAvailable: true },
      { sizeNumber: 8, isAvailable: true },
      { sizeNumber: 9, isAvailable: true },
    ],
    productImages: [
      'url Link31',
      'url Link32',
      'url Link33',
      'url Link34',
      'url Link35',
    ],
    color: 'White',
  },
  {
    brand: 'Nike',
    title: 'Air Force 1',
    subTitle: 'Casual Shoes',
    price: 100,
    sizes: [
      { sizeNumber: 8, isAvailable: true },
      { sizeNumber: 9, isAvailable: true },
      { sizeNumber: 10, isAvailable: true },
    ],
    productImages: [
      'url Link36',
      'url Link37',
      'url Link38',
      'url Link39',
      'url Link40',
    ],
    color: 'White',
  },
  {
    brand: 'Puma',
    title: 'Rider Vintage',
    subTitle: 'Unisex Sneakers',
    price: 80,
    sizes: [
      { sizeNumber: 7, isAvailable: true },
      { sizeNumber: 8, isAvailable: false },
      { sizeNumber: 9, isAvailable: true },
    ],
    productImages: [
      'url Link41',
      'url Link42',
      'url Link43',
      'url Link44',
      'url Link45',
    ],
    color: 'Black',
  },
  {
    brand: 'Adidas',
    title: 'Superstar',
    subTitle: 'Originals Shoes',
    price: 90,
    sizes: [
      { sizeNumber: 8, isAvailable: true },
      { sizeNumber: 9, isAvailable: true },
      { sizeNumber: 10, isAvailable: true },
    ],
    productImages: [
      'url Link46',
      'url Link47',
      'url Link48',
      'url Link49',
      'url Link50',
    ],
    color: 'White',
  },
];

export const filteredData = {
  brands: {
    Nike: [
      {
        brand: 'Nike',
        title: 'Air Jordan 1 Retro High',
        subTitle: 'Basketball Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link1',
          'url Link2',
          'url Link3',
          'url Link4',
          'url Link5',
        ],
        color: 'Black',
      },
      {
        brand: 'Nike',
        title: 'Air Max 270',
        subTitle: 'Casual Shoes',
        price: 150,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link16',
          'url Link17',
          'url Link18',
          'url Link19',
          'url Link20',
        ],
        color: 'White',
      },
      {
        brand: 'Nike',
        title: 'Air Force 1',
        subTitle: 'Casual Shoes',
        price: 100,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link36',
          'url Link37',
          'url Link38',
          'url Link39',
          'url Link40',
        ],
        color: 'White',
      },
    ],
    Adidas: [
      {
        brand: 'Adidas',
        title: 'UltraBoost 21',
        subTitle: 'Running Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link6',
          'url Link7',
          'url Link8',
          'url Link9',
          'url Link10',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'NMD R1',
        subTitle: 'Sneakers',
        price: 130,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link21',
          'url Link22',
          'url Link23',
          'url Link24',
          'url Link25',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'Stan Smith',
        subTitle: 'Originals Shoes',
        price: 85,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link31',
          'url Link32',
          'url Link33',
          'url Link34',
          'url Link35',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'Superstar',
        subTitle: 'Originals Shoes',
        price: 90,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link46',
          'url Link47',
          'url Link48',
          'url Link49',
          'url Link50',
        ],
        color: 'White',
      },
    ],
    Puma: [
      {
        brand: 'Puma',
        title: 'RS-X3 Puzzle',
        subTitle: 'Sneakers',
        price: 110,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link11',
          'url Link12',
          'url Link13',
          'url Link14',
          'url Link15',
        ],
        color: 'Blue',
      },
      {
        brand: 'Puma',
        title: 'Cali Sport',
        subTitle: "Women's Sneakers",
        price: 100,
        sizes: [
          {
            sizeNumber: 6,
            isAvailable: true,
          },
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link26',
          'url Link27',
          'url Link28',
          'url Link29',
          'url Link30',
        ],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'Rider Vintage',
        subTitle: 'Unisex Sneakers',
        price: 80,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link41',
          'url Link42',
          'url Link43',
          'url Link44',
          'url Link45',
        ],
        color: 'Black',
      },
    ],
  },
  colors: {
    Black: [
      {
        brand: 'Nike',
        title: 'Air Jordan 1 Retro High',
        subTitle: 'Basketball Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link1',
          'url Link2',
          'url Link3',
          'url Link4',
          'url Link5',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'NMD R1',
        subTitle: 'Sneakers',
        price: 130,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link21',
          'url Link22',
          'url Link23',
          'url Link24',
          'url Link25',
        ],
        color: 'Black',
      },
      {
        brand: 'Puma',
        title: 'Rider Vintage',
        subTitle: 'Unisex Sneakers',
        price: 80,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link41',
          'url Link42',
          'url Link43',
          'url Link44',
          'url Link45',
        ],
        color: 'Black',
      },
    ],
    White: [
      {
        brand: 'Adidas',
        title: 'UltraBoost 21',
        subTitle: 'Running Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link6',
          'url Link7',
          'url Link8',
          'url Link9',
          'url Link10',
        ],
        color: 'White',
      },
      {
        brand: 'Nike',
        title: 'Air Max 270',
        subTitle: 'Casual Shoes',
        price: 150,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link16',
          'url Link17',
          'url Link18',
          'url Link19',
          'url Link20',
        ],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'Cali Sport',
        subTitle: "Women's Sneakers",
        price: 100,
        sizes: [
          {
            sizeNumber: 6,
            isAvailable: true,
          },
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link26',
          'url Link27',
          'url Link28',
          'url Link29',
          'url Link30',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'Stan Smith',
        subTitle: 'Originals Shoes',
        price: 85,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link31',
          'url Link32',
          'url Link33',
          'url Link34',
          'url Link35',
        ],
        color: 'White',
      },
      {
        brand: 'Nike',
        title: 'Air Force 1',
        subTitle: 'Casual Shoes',
        price: 100,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link36',
          'url Link37',
          'url Link38',
          'url Link39',
          'url Link40',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'Superstar',
        subTitle: 'Originals Shoes',
        price: 90,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link46',
          'url Link47',
          'url Link48',
          'url Link49',
          'url Link50',
        ],
        color: 'White',
      },
    ],
    Blue: [
      {
        brand: 'Puma',
        title: 'RS-X3 Puzzle',
        subTitle: 'Sneakers',
        price: 110,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link11',
          'url Link12',
          'url Link13',
          'url Link14',
          'url Link15',
        ],
        color: 'Blue',
      },
    ],
  },
  sizes: {
    'size 7': [
      {
        brand: 'Nike',
        title: 'Air Jordan 1 Retro High',
        subTitle: 'Basketball Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link1',
          'url Link2',
          'url Link3',
          'url Link4',
          'url Link5',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'UltraBoost 21',
        subTitle: 'Running Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link6',
          'url Link7',
          'url Link8',
          'url Link9',
          'url Link10',
        ],
        color: 'White',
      },
      {
        brand: 'Nike',
        title: 'Air Max 270',
        subTitle: 'Casual Shoes',
        price: 150,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link16',
          'url Link17',
          'url Link18',
          'url Link19',
          'url Link20',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'NMD R1',
        subTitle: 'Sneakers',
        price: 130,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link21',
          'url Link22',
          'url Link23',
          'url Link24',
          'url Link25',
        ],
        color: 'Black',
      },
      {
        brand: 'Puma',
        title: 'Cali Sport',
        subTitle: "Women's Sneakers",
        price: 100,
        sizes: [
          {
            sizeNumber: 6,
            isAvailable: true,
          },
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link26',
          'url Link27',
          'url Link28',
          'url Link29',
          'url Link30',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'Stan Smith',
        subTitle: 'Originals Shoes',
        price: 85,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link31',
          'url Link32',
          'url Link33',
          'url Link34',
          'url Link35',
        ],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'Rider Vintage',
        subTitle: 'Unisex Sneakers',
        price: 80,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link41',
          'url Link42',
          'url Link43',
          'url Link44',
          'url Link45',
        ],
        color: 'Black',
      },
    ],
    'size 8': [
      {
        brand: 'Nike',
        title: 'Air Jordan 1 Retro High',
        subTitle: 'Basketball Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link1',
          'url Link2',
          'url Link3',
          'url Link4',
          'url Link5',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'UltraBoost 21',
        subTitle: 'Running Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link6',
          'url Link7',
          'url Link8',
          'url Link9',
          'url Link10',
        ],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'RS-X3 Puzzle',
        subTitle: 'Sneakers',
        price: 110,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link11',
          'url Link12',
          'url Link13',
          'url Link14',
          'url Link15',
        ],
        color: 'Blue',
      },
      {
        brand: 'Nike',
        title: 'Air Max 270',
        subTitle: 'Casual Shoes',
        price: 150,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link16',
          'url Link17',
          'url Link18',
          'url Link19',
          'url Link20',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'NMD R1',
        subTitle: 'Sneakers',
        price: 130,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link21',
          'url Link22',
          'url Link23',
          'url Link24',
          'url Link25',
        ],
        color: 'Black',
      },
      {
        brand: 'Puma',
        title: 'Cali Sport',
        subTitle: "Women's Sneakers",
        price: 100,
        sizes: [
          {
            sizeNumber: 6,
            isAvailable: true,
          },
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link26',
          'url Link27',
          'url Link28',
          'url Link29',
          'url Link30',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'Stan Smith',
        subTitle: 'Originals Shoes',
        price: 85,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link31',
          'url Link32',
          'url Link33',
          'url Link34',
          'url Link35',
        ],
        color: 'White',
      },
      {
        brand: 'Nike',
        title: 'Air Force 1',
        subTitle: 'Casual Shoes',
        price: 100,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link36',
          'url Link37',
          'url Link38',
          'url Link39',
          'url Link40',
        ],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'Rider Vintage',
        subTitle: 'Unisex Sneakers',
        price: 80,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link41',
          'url Link42',
          'url Link43',
          'url Link44',
          'url Link45',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'Superstar',
        subTitle: 'Originals Shoes',
        price: 90,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link46',
          'url Link47',
          'url Link48',
          'url Link49',
          'url Link50',
        ],
        color: 'White',
      },
    ],
    'size 9': [
      {
        brand: 'Nike',
        title: 'Air Jordan 1 Retro High',
        subTitle: 'Basketball Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link1',
          'url Link2',
          'url Link3',
          'url Link4',
          'url Link5',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'UltraBoost 21',
        subTitle: 'Running Shoes',
        price: 180,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link6',
          'url Link7',
          'url Link8',
          'url Link9',
          'url Link10',
        ],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'RS-X3 Puzzle',
        subTitle: 'Sneakers',
        price: 110,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link11',
          'url Link12',
          'url Link13',
          'url Link14',
          'url Link15',
        ],
        color: 'Blue',
      },
      {
        brand: 'Nike',
        title: 'Air Max 270',
        subTitle: 'Casual Shoes',
        price: 150,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link16',
          'url Link17',
          'url Link18',
          'url Link19',
          'url Link20',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'NMD R1',
        subTitle: 'Sneakers',
        price: 130,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link21',
          'url Link22',
          'url Link23',
          'url Link24',
          'url Link25',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'Stan Smith',
        subTitle: 'Originals Shoes',
        price: 85,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link31',
          'url Link32',
          'url Link33',
          'url Link34',
          'url Link35',
        ],
        color: 'White',
      },
      {
        brand: 'Nike',
        title: 'Air Force 1',
        subTitle: 'Casual Shoes',
        price: 100,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link36',
          'url Link37',
          'url Link38',
          'url Link39',
          'url Link40',
        ],
        color: 'White',
      },
      {
        brand: 'Puma',
        title: 'Rider Vintage',
        subTitle: 'Unisex Sneakers',
        price: 80,
        sizes: [
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link41',
          'url Link42',
          'url Link43',
          'url Link44',
          'url Link45',
        ],
        color: 'Black',
      },
      {
        brand: 'Adidas',
        title: 'Superstar',
        subTitle: 'Originals Shoes',
        price: 90,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link46',
          'url Link47',
          'url Link48',
          'url Link49',
          'url Link50',
        ],
        color: 'White',
      },
    ],
    'size 10': [
      {
        brand: 'Puma',
        title: 'RS-X3 Puzzle',
        subTitle: 'Sneakers',
        price: 110,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link11',
          'url Link12',
          'url Link13',
          'url Link14',
          'url Link15',
        ],
        color: 'Blue',
      },
      {
        brand: 'Nike',
        title: 'Air Force 1',
        subTitle: 'Casual Shoes',
        price: 100,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link36',
          'url Link37',
          'url Link38',
          'url Link39',
          'url Link40',
        ],
        color: 'White',
      },
      {
        brand: 'Adidas',
        title: 'Superstar',
        subTitle: 'Originals Shoes',
        price: 90,
        sizes: [
          {
            sizeNumber: 8,
            isAvailable: true,
          },
          {
            sizeNumber: 9,
            isAvailable: true,
          },
          {
            sizeNumber: 10,
            isAvailable: true,
          },
        ],
        productImages: [
          'url Link46',
          'url Link47',
          'url Link48',
          'url Link49',
          'url Link50',
        ],
        color: 'White',
      },
    ],
    'size 6': [
      {
        brand: 'Puma',
        title: 'Cali Sport',
        subTitle: "Women's Sneakers",
        price: 100,
        sizes: [
          {
            sizeNumber: 6,
            isAvailable: true,
          },
          {
            sizeNumber: 7,
            isAvailable: true,
          },
          {
            sizeNumber: 8,
            isAvailable: false,
          },
        ],
        productImages: [
          'url Link26',
          'url Link27',
          'url Link28',
          'url Link29',
          'url Link30',
        ],
        color: 'White',
      },
    ],
  },
  priceRange: {
    start: 80,
    end: 180,
  },
};
