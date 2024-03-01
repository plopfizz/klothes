import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';
import { mockProductData } from '../mock-data/mockData';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = '/api/products'; // Assuming your API endpoint for products

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
    return of(mockProductData)
  }
}
