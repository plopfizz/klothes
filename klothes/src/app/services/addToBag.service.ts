// bagList.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { checkoutModel } from '../models/checkout.model';

@Injectable({
  providedIn: 'root',
})
export class AddToBagService {
  private bagList: checkoutModel[] = [];
  private bagListSubject: BehaviorSubject<checkoutModel[]> =
    new BehaviorSubject<checkoutModel[]>([]);

  constructor() {}

  getList(): checkoutModel[] {
    return this.bagList;
  }

  addToBag(product: checkoutModel): void {
    console.log(product);
    if (!this.isInBags(product)) {
      this.bagList.push(product);
      this.emitBagListChange();
    }
  }

  removeFromBag(product: checkoutModel): void {
    this.bagList = this.bagList.filter((item) => item !== product);
    this.emitBagListChange();
  }

  isInBags(product: checkoutModel): boolean {
    return this.bagList.includes(product);
  }

  getBaglistChange(): Observable<checkoutModel[]> {
    return this.bagListSubject.asObservable();
  }

  private emitBagListChange(): void {
    this.bagListSubject.next(this.bagList);
  }
}
