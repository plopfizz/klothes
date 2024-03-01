import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Filter } from '../interfaces/product.interface';
import { PriceRangeFilterComponent } from '../price-range-filter/price-range-filter.component';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, PriceRangeFilterComponent],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFilterComponent {
  @Input() filterOptions: Filter = {
    priceRange: { start: 0, end: 0 },
    brands: {},
    colors: {},
    sizes: {},
  };
  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  selectedFilters: any = {};

  constructor() {}

  onFilterChange(filterType: string, filterValue: any) {
    if (!this.selectedFilters[filterType]) {
      this.selectedFilters[filterType] = [];
    }

    if (this.selectedFilters[filterType].includes(filterValue)) {
      this.selectedFilters[filterType] = this.selectedFilters[
        filterType
      ].filter((value: any) => value !== filterValue);
    } else {
      this.selectedFilters[filterType].push(filterValue);
    }

    this.filterChange.emit(this.selectedFilters);
  }

  onSelectAll(filterType: string, event: any) {
    let allKeys: string[] = [];

    switch (filterType) {
      case 'brands':
        allKeys = Object.keys(this.filterOptions.brands);
        break;
      case 'sizes':
        allKeys = Object.keys(this.filterOptions.sizes);
        break;
      case 'colors':
        allKeys = Object.keys(this.filterOptions.colors);
        break;
    }
    if (event.target.checked) {
      this.selectedFilters[filterType] = allKeys;
    } else {
      this.selectedFilters[filterType] = [];
    }
    // if (!this.selectedFilters[filterType]) {
    //   this.selectedFilters[filterType] = allKeys;
    // } else {
    //   // Toggle select all
    //   if (this.selectedFilters[filterType].length === allKeys.length) {
    //     this.selectedFilters[filterType] = [];
    //   } else {
    //     this.selectedFilters[filterType] = [...allKeys];
    //   }
    // }
    this.filterChange.emit(this.selectedFilters);
  }
}
