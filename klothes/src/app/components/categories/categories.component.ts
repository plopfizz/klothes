import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Genders } from '../../enums/gender.enum';
import { WishlistService } from '../../services/wishlist.service';
import { GenderSubproductsComponent } from '../gender-subproducts/gender-subproducts.component';
import { AddToBagService } from '../../services/addToBag.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule, CommonModule, GenderSubproductsComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit, OnDestroy {
  @Input() gendersList: Genders[] = [];
  wishlistCount: number = 0;
  addToBagCount:number = 0;
  private wishlistSubscription: Subscription | undefined;
  constructor(private wishListService: WishlistService,private addToBagService:AddToBagService) {}

  ngOnInit(): void {
    this.updateWishlistCount();
    this.subscribeToWishlistChanges();
    this.updateAddToBagCount();
    this.subscribeToAddlistChanges();
  }

  updateWishlistCount(): void {
    this.wishlistCount = this.wishListService.getWishlist().length;
  }
  updateAddToBagCount(): void {
    this.addToBagCount = this.addToBagService.getList().length;
  }
  private subscribeToAddlistChanges(): void {
    this.wishlistSubscription = this.addToBagService
      .getBaglistChange()
      .subscribe(() => {
        this.updateAddToBagCount();

      });
  }

  private subscribeToWishlistChanges(): void {
    this.wishlistSubscription = this.wishListService
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
