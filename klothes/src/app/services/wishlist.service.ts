// wishlist.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlist: Product[] = [];
  private wishlistSubject: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);

  constructor() {}

  getWishlist(): Product[] {
    return this.wishlist;
  }

  addToWishlist(product: Product): void {
    if (!this.isInWishlist(product)) {
      this.wishlist.push(product);
      this.emitWishlistChange();
    }
  }

  removeFromWishlist(product: Product): void {
    this.wishlist = this.wishlist.filter((item) => item !== product);
    this.emitWishlistChange();
  }

  isInWishlist(product: Product): boolean {
    return this.wishlist.includes(product);
  }

  getWishlistChange(): Observable<Product[]> {
    return this.wishlistSubject.asObservable();
  }

  private emitWishlistChange(): void {
    this.wishlistSubject.next(this.wishlist);
  }
}
