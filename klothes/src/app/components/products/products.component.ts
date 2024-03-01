import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FiltersComponent } from '../../filters/filters.component';
import { Filter, Product } from '../../interfaces/product.interface';
import { ProductFilterComponent } from '../../product-filter/product-filter.component';
import { ProductListComponent } from '../../product-list/product-list.component';
import { FilterService } from '../../services/filter.service';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FiltersComponent, ProductListComponent, ProductFilterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
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
  constructor(
    private filterService: FilterService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    console.log('Hi ewra rein ngonint');
    this.filterService.filters$.subscribe((filters) => {
      console.log(filters);
      this.loadProducts(filters);
    });
  }

  applyFilter(selectedFilters: any) {
    console.log(selectedFilters);
  }
  loadProducts(filters: any = {}): void {
    this.priceRange = filters.priceRange;

    this.productService.getFilteredProducts(filters).subscribe(
      (products: Product[]) => {
        this.products = products;
        // const cachedFilters = this.filterService.getFilters();
        // if (JSON.stringify(cachedFilters) === JSON.stringify(filters)) {
        //   return;
        // }
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
      //populating the brands datastructure
      this.populateDataStructure(brands, product.brand, product);

      // Populate colors data structure
      this.populateDataStructure(colors, product.color, product);
      product.sizes.forEach((sizeObj) => {
        const sizeKey = 'size ' + sizeObj.sizeNumber;
        if (!sizes[sizeKey]) {
          sizes[sizeKey] = [];
        }
        sizes[sizeKey].push(product);
      });
    });
    if (this.priceRange) this.calculatePriceRangeForProducts();
    console.log(brands, colors, sizes, this.priceRange);

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
