import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../interfaces/product.interface';
import { ProductCardComponent } from '../../product-card/product-card.component';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistComponent implements OnInit, OnDestroy {
  wishlistCount: number = 0;
  private wishlistSubscription: Subscription | undefined;
  wishlistItems: Product[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.updateWishlistCount();
    this.subscribeToWishlistChanges();
  }

  updateWishlistCount(): void {
    this.wishlistCount = this.wishlistService.getWishlist().length;
    this.wishlistItems = this.wishlistService.getWishlist();
  }

  private subscribeToWishlistChanges(): void {
    this.wishlistSubscription = this.wishlistService
      .getWishlistChange()
      .subscribe(() => {
        this.updateWishlistCount();
      });
  }

  ngOnDestroy(): void {
    if (this.wishlistSubscription) {
      this.wishlistSubscription.unsubscribe();
    }
  }
}
