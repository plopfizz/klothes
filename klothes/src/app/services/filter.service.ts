import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter, Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filters: Filter = {
    brands: {},
    colors: {},
    sizes: {},
    priceRange: { start: 0, end: 100 },
  };

  filters$ = new BehaviorSubject<Filter>(this.filters);

  constructor() {}

  // setFilter(category: string, options: Partial<Filter>): void {
  //   this.filters[category] = options;
  //   this.filters$.next(this.filters);
  // }

  setFilters(filters: Filter): void {
    this.filters = filters;
    this.filters$.next(this.filters);
  }
  getFilters(): Filter {
    return this.filters;
  }
  setPriceRange(start: number, end: number): void {
    this.filters.priceRange = { start, end };
    console.log(this.filters);
    this.filters$.next(this.filters);
  }

  //   setBrands(brands: keyValue): void {
  //     this.filters.brands = brands;
  //     this.filters$.next(this.filters);
  //   }

  //   setColors(colors: keyValue): void {
  //     this.filters.colors = colors;
  //     this.filters$.next(this.filters);
  //   }

  //   setSizes(sizes: keyValue): void {
  //     this.filters.sizes = sizes;
  //     this.filters$.next(this.filters);
  //   }
}
