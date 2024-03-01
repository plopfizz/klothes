import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interfaces/product.interface';
import { ProductService } from '../services/products.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  constructor(
    private wishlistService: WishlistService,
    private productService: ProductService,
    private router: Router
  ) {}
  @Input() product: Product = {} as any;
  isHovered: boolean = false;
  navigateTo(title: string) {
    this.productService.addProduct(this.product);
    this.router.navigate(['product-overview', title]);
  }
  changeWishlistStatus() {
    this.product.isWishListed = !this.product.isWishListed;
    if (this.product.isWishListed) {
      this.wishlistService.addToWishlist(this.product);
    } else {
      this.wishlistService.removeFromWishlist(this.product);
    }
  }

  toggleHover() {
    this.isHovered = !this.isHovered;
  }
}
