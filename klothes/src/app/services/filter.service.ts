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


}
