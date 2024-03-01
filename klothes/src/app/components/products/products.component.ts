import { Component, OnInit } from '@angular/core';
import { FilterDisplayComponent } from '../../filter-display/filter-display.component';
import { FiltersComponent } from '../../filters/filters.component';
import { Filter, Product } from '../../interfaces/product.interface';
import { ProductFilterComponent } from '../../product-filter/product-filter.component';
import { ProductListComponent } from '../../product-list/product-list.component';
import { FilterService } from '../../services/filter.service';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    FiltersComponent,
    ProductListComponent,
    ProductFilterComponent,
    FilterDisplayComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProductsList: Product[] = [];
  priceRange: { start: number; end: number } = { start: 0, end: 0 };
  brands: { [key: string]: Product[] } = {};
  colors: { [key: string]: Product[] } = {};
  filterOptions: Filter = {
    priceRange: { start: 0, end: 0 },
    brands: {},
    colors: {},
    sizes: {},
  };
  filteredProducts: any;
  selectedFilters: any;
  constructor(
    private filterService: FilterService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.filteredProductsList = this.products;
    this.filterService.filters$.subscribe((filters) => {
      this.loadProducts(filters);
    });
  }
  filterProducts(): Product[] {
    return this.products.filter((product) => {
      return Object.keys(this.selectedFilters).every((category) => {
        if (
          !this.selectedFilters[category] ||
          this.selectedFilters[category].length === 0
        ) {
          return true;
        }
        if (category === 'sizes') {
          // Check if any selected sizeNumber is available in the product's sizes
          return this.selectedFilters.sizes.some((selectedSize: string) =>
            product.sizes.some(
              (size) => size.sizeNumber.toString() === selectedSize
            )
          );
        }
        return (
          this.selectedFilters[category].includes(product['brand']) ||
          this.selectedFilters[category].includes(product['color'])
        );
      });
    });
  }

  applyFilter(selectedFilters: any) {
    this.selectedFilters = selectedFilters;
    this.filteredProductsList = this.filterProducts();
  }
  loadProducts(filters: any = {}): void {
    this.priceRange = filters.priceRange;

    this.productService.getFilteredProducts(filters).subscribe(
      (products: Product[]) => {
        this.products = products;
        this.calculateFilters();
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }
  populateDataStructure(
    dataStructure: { [key: string]: Product[] },
    key: string,
    product: Product
  ) {
    if (!dataStructure[key]) {
      dataStructure[key] = [];
    }
    dataStructure[key].push(product);
  }
  calculatePriceRangeForProducts() {
    if (this.products?.length > 0) {
      const prices: number[] = this.products.map(
        (product: Product) => product.price
      );
      const minValue = Math.min(...prices);
      const maxValue = Math.max(...prices);

      //it is updating just we have the mock data so it is not showing up
      this.priceRange['start'] = minValue;
      this.priceRange['end'] = maxValue;
    }
  }
  calculateFilters(): void {
    const brands: { [key: string]: Product[] } = {};
    const colors: { [key: string]: Product[] } = {};
    const sizes: { [key: string]: Product[] } = {};
    this.products.forEach((product: Product) => {
      this.populateDataStructure(brands, product.brand, product);

      this.populateDataStructure(colors, product.color, product);
      product.sizes.forEach((sizeObj) => {
        const sizeKey = sizeObj.sizeNumber;
        if (!sizes[sizeKey]) {
          sizes[sizeKey] = [];
        }
        sizes[sizeKey].push(product);
      });
    });
    if (this.priceRange) this.calculatePriceRangeForProducts();

    const filters: Filter = {
      brands,
      colors,
      sizes,
      priceRange: this.priceRange,
    };
    this.filterOptions = filters;
    // this.filterService.setFilters(filters);
  }
}
