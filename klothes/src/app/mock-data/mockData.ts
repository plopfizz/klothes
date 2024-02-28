import {
  DifferentCategories,
  Genders,
  ProductTypes,
} from '../enums/gender.enum';
import { productType } from '../interfaces/clothes.interface';

export const products: productType[] = [
  {
    name: 'All Shoes',
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
  {
    name: 'Valentino Garavani',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.WOMEN],
  },

  // Converse
  {
    name: 'Converse',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.WOMEN],
  },

  // Bottega Veneta
  {
    name: 'Bottega Veneta',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.WOMEN],
  },

  // Gucci
  {
    name: 'Gucci',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.WOMEN],
  },

  // Golden Goose
  {
    name: 'Golden Goose',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.WOMEN],
  },

  // NEW ARRIVALS - Type
  // {
  //   name: 'NEW ARRIVALS',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.NEW_ARRIVALS,
  //   gender: [Genders.WOMEN],
  // },

  // Ankle Boots
  {
    name: 'Ankle Boots',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.NEW_ARRIVALS,
    gender: [Genders.WOMEN],
  },

  // Loafers
  {
    name: 'Loafers',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.NEW_ARRIVALS,
    gender: [Genders.WOMEN],
  },

  // Mules
  {
    name: 'Mules',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.NEW_ARRIVALS,
    gender: [Genders.WOMEN],
  },

  // Sandals
  {
    name: 'Sandals',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.NEW_ARRIVALS,
    gender: [Genders.WOMEN],
  },

  // DISCOVER
  {
    name: 'Black Designers',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.DISCOVER,
    gender: [Genders.WOMEN],
  },
  {
    name: 'Asian Designers',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.DISCOVER,
    gender: [Genders.WOMEN],
  },
  // Include other discovery items...

  // MOST FAVORITED - Type
  // {
  //   name: 'MOST FAVORITED',
  //   productType: ProductTypes.SHOES,
  //   type: DifferentCategories.MOST_FAVORITED,
  //   gender: [Genders.WOMEN],
  // },

  // Sneakers
  {
    name: 'Sneakers',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.MOST_FAVORITED,
    gender: [Genders.WOMEN],
  },

  // Platforms
  {
    name: 'Platforms',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.MOST_FAVORITED,
    gender: [Genders.WOMEN],
  },

  // Oxfords
  {
    name: 'Oxfords',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.MOST_FAVORITED,
    gender: [Genders.WOMEN],
  },

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
  {
    name: 'Converse',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.NEW_ARRIVALS,
    gender: [Genders.MEN],
  },

  // Sneakers
  {
    name: 'Sneakers',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.NEW_ARRIVALS,
    gender: [Genders.MEN],
  },

  // Loafers
  {
    name: 'Loafers',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.NEW_ARRIVALS,
    gender: [Genders.MEN],
  },

  // Sandals
  {
    name: 'Sandals',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.NEW_ARRIVALS,
    gender: [Genders.MEN],
  },

  // DISCOVER
  {
    name: 'Black Designers',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.DISCOVER,
    gender: [Genders.MEN],
  },
  {
    name: 'Asian Designers',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.DISCOVER,
    gender: [Genders.MEN],
  },
  // Include other discovery items...

  // MOST FAVORITED - Type
  {
    name: 'Vans',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.MOST_FAVORITED,
    gender: [Genders.MEN],
  },

  // High Top Sneakers
  {
    name: 'High Top Sneakers',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.MOST_FAVORITED,
    gender: [Genders.MEN],
  },

  // Slides
  {
    name: 'Slides',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.MOST_FAVORITED,
    gender: [Genders.MEN],
  },

  // Chelsea Boots
  {
    name: 'Chelsea Boots',
    productType: ProductTypes.SHOES,
    type: DifferentCategories.MOST_FAVORITED,
    gender: [Genders.MEN],
  },
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
  {
    name: 'Maxi Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.BY_LENGTH,
    gender: [Genders.WOMEN],
  },

  // Midi Dresses
  {
    name: 'Midi Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.BY_LENGTH,
    gender: [Genders.WOMEN],
  },

  // Mini Dresses
  {
    name: 'Mini Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.BY_LENGTH,
    gender: [Genders.WOMEN],
  },

  // Knee Length Dresses
  {
    name: 'Knee Length Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.BY_LENGTH,
    gender: [Genders.WOMEN],
  },

  // BRANDS WE LOVE - Type
  // {
  //   name: 'BRANDS WE LOVE',
  //   productType: ProductTypes.DRESSES,
  //   type: DifferentCategories.BRANDS_WE_LOVE,
  //   gender: [Genders.WOMEN],
  // },

  // David Koma Dresses
  {
    name: 'David Koma Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.WOMEN],
  },

  // Versace Dresses
  {
    name: 'Versace Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.WOMEN],
  },

  // Samantha Sung Dresses
  {
    name: 'Samantha Sung Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.WOMEN],
  },

  // Alexander McQueen Dresses
  {
    name: 'Alexander McQueen Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.WOMEN],
  },

  // Valentino Dresses
  {
    name: 'Valentino Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.WOMEN],
  },

  // St. John Dresses
  {
    name: 'St. John Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.WOMEN],
  },

  // Oscar De La Renta Dresses
  {
    name: 'Oscar De La Renta Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.WOMEN],
  },

  // Red Valentino Dresses
  {
    name: 'Red Valentino Dresses',
    productType: ProductTypes.DRESSES,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.WOMEN],
  },
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

  // Brands We Love
  {
    name: 'Amiri',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.MEN],
  },
  {
    name: 'Thom Browne',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.MEN],
  },
  {
    name: 'Rick Owens',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.MEN],
  },
  {
    name: 'Balenciaga',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.MEN, Genders.WOMEN],
  },
  {
    name: 'Gucci',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.BRANDS_WE_LOVE,
    gender: [Genders.MEN, Genders.WOMEN],
  },

  // New Arrivals
  {
    name: 'T-shirts',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.NEW_ARRIVALS,
    gender: [Genders.MEN],
  },
  {
    name: 'Outerwear',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.NEW_ARRIVALS,
    gender: [Genders.MEN, Genders.WOMEN],
  },
  {
    name: 'Swimsuits',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.NEW_ARRIVALS,
    gender: [Genders.MEN],
  },
  {
    name: 'Distressed Jeans',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.NEW_ARRIVALS,
    gender: [Genders.MEN],
  },

  // Discover
  {
    name: 'Black Designers',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.DISCOVER,
    gender: [Genders.MEN, Genders.WOMEN],
  },
  {
    name: 'Asian Designers',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.DISCOVER,
    gender: [Genders.MEN, Genders.WOMEN],
  },
  {
    name: 'LGBTQIA+ Designers',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.DISCOVER,
    gender: [Genders.MEN, Genders.WOMEN],
  },
  {
    name: 'LatinX Designers',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.DISCOVER,
    gender: [Genders.MEN, Genders.WOMEN],
  },
  {
    name: 'Pre-owned',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.DISCOVER,
    gender: [Genders.MEN, Genders.WOMEN],
  },

  // Most Favorited
  {
    name: 'Sweatshirts',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.MOST_FAVORITED,
    gender: [Genders.MEN],
  },
  {
    name: 'Outerwear',
    productType: ProductTypes.CLOTHING,
    type: DifferentCategories.MOST_FAVORITED,
    gender: [Genders.MEN, Genders.WOMEN],
  },

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

