import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { ProductService } from '../services/products.service';
import { AddToBagService } from '../services/addToBag.service';
import { checkoutModel } from '../models/checkout.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.scss',
})
export class ProductOverviewComponent implements OnInit, OnDestroy {
  constructor(
    private productService: ProductService,
    private addToBagService: AddToBagService,
    private router:Router
  ) {}
  private productSubscription: Subscription | undefined;
  showTooltip: boolean = false;
  product: Product = {} as any;
  imagePairs: string[][] = [];
  selectedSize: number | null = null;
  handleMouseEnter() {
    if (this.selectedSize === null) {
      this.showTooltip = true; // Show tooltip if no size is selected
    }
  }
  handleMouseLeave() {
    this.showTooltip = false; // Hide tooltip when mouse leaves
  }
  toggleSizeSelection(size: any): void {
    if (size.isAvailable) {
      if (this.selectedSize === size.sizeNumber) {
        this.selectedSize = null; // Deselect if already selected
      } else {
        this.selectedSize = size.sizeNumber; // Select the size
      }
    }
  }
  addToBag() {
    this.addToBagService.addToBag(
      new checkoutModel(this.product, this.selectedSize || 0)
    );
    this.router.navigate(['bag'])
  }
  ngOnInit(): void {
    this.subscribeToProductChanges();
  }
  private subscribeToProductChanges(): void {
    this.productSubscription = this.productService
      .getProduct()
      .subscribe((product) => {
        this.product = product;
        this.imagePairs = this.chunkArray(this.product.productImages || [], 2);
      });
  }
  zoomImage(event: MouseEvent) {
    const image = event.currentTarget as HTMLImageElement;
    const rect = image.getBoundingClientRect();

    // Calculate mouse position relative to the image
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Calculate zoom factor based on mouse position
    const zoomFactorX = mouseX / rect.width;
    const zoomFactorY = mouseY / rect.height;

    // Apply zoom effect
    image.style.transformOrigin = `${zoomFactorX * 100}% ${zoomFactorY * 100}%`;
    image.classList.add('zoomed');
  }

  chunkArray(array: any[], size: number): any[] {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }
  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
