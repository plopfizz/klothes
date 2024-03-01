export interface Product {
  title: string;
  brand: string;
  subTitle: string;
  price: number;
  sizes: Size[];
  productImages: string[];
  color: string;
  isWishListed:boolean
}

export interface Size {
  sizeNumber: number;
  isAvailable: boolean;
}

export interface Filter {
  colors: { [key: string]: Product[] };
  brands: { [key: string]: Product[] };
  sizes: { [key: string]: Product[] };
  priceRange: priceStartEnd;
}
export interface priceStartEnd {
  start: number;
  end: number;
}

