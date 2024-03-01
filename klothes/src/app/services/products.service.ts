import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { mockProductData } from '../mock-data/mockData';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = '/api/products'; // Assuming your API endpoint for products
  private product$: BehaviorSubject<Product> = new BehaviorSubject<Product>(
    {} as any
  );

  constructor(private http: HttpClient) {}

  // Method to fetch products based on filters
  getFilteredProducts(filters: any): Observable<Product[]> {
    // Construct HTTP params based on filters
    let params = new HttpParams();
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        params = params.set(key, filters[key]);
      }
    }

    // Make HTTP GET request with filters as query parameters
    // return this.http.get<any[]>(this.baseUrl, { params });
    return of(mockProductData);
  }
  getProduct(): Observable<Product> {
    return this.product$.asObservable();
  }

  addProduct(product: Product) {
    this.product$.next(product);
  }
}
