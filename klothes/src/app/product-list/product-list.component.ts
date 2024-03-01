import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { mockProductData } from '../mock-data/mockData';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[] = mockProductData;
  constructor() {}

  ngOnInit(): void {}
}
