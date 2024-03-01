import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[]=[];
  constructor() {}

  ngOnInit(): void {}
}
