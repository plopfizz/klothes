import { Product } from "../interfaces/product.interface";

export class checkoutModel {
  title: string;
  brand: string;
  subTitle: string;
  price: number;
  size: number;
  productImages: string[];
  color: string;
  isWishListed: boolean;
  constructor(product: Product, size: number) {
    this.title = product.title;
    this.brand = product.brand;
    this.subTitle = product.subTitle;
    this.price = product.price;
    this.productImages = product.productImages;
    this.color = product.color;
    this.isWishListed = product.isWishListed;
    this.size = size;
  }
}
