import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Genders } from '../enums/gender.enum';
import { productType } from '../interfaces/clothes.interface';

export interface MainComponentState {
  genders: Genders[];
  selectedGender: string | null;
  genderSpecificProducts: [];
  products: productType[];
  productTypeSpecificList: { [key: string]: productType[] } | null;
  onClickDisplaySubProducts :boolean;
  isLoading: boolean;
}

export const initialState: MainComponentState = {
  genders: [Genders.WOMEN, Genders.MEN, Genders.KID],
  selectedGender: Genders.WOMEN,
  genderSpecificProducts: [],
  products: [],
  onClickDisplaySubProducts: false,
  productTypeSpecificList: {},
  isLoading: true,
};
@Injectable()
export class MainComponentStore extends ComponentStore<MainComponentState> {
  constructor() {
    super(initialState);
  }
  genders$ = this.select((state) => state.genders);
  onClickDisplaySubProducts$ = this.select((state) => state.onClickDisplaySubProducts);
  products$ = this.select((state) => state.products);
  productTypeSpecificList$ = this.select(
    (state) => state.productTypeSpecificList
  );
  selectedGender$ = this.select((state) => state.selectedGender);
  genderSpecificProducts$ = this.select(
    (state) => state.genderSpecificProducts
  );
  isLoading$ = this.select((state) => state.isLoading);
  setGender(gender: string) {
    this.patchState({ selectedGender: gender });
  }
  setOnClickDisplaySubProducts(value: boolean) {
    this.patchState({ onClickDisplaySubProducts: value });
  }

  appendGendersForSameName(products: productType[]) {
    const uniqueProducts: productType[] = [];

    products.forEach((product) => {
      const existingProductIndex = uniqueProducts.findIndex(
        (p) => p.name === product.name
      );
      if (existingProductIndex !== -1) {
        // If the product with the same name exists, append its genders array
        uniqueProducts[existingProductIndex].gender = [
          ...uniqueProducts[existingProductIndex].gender,
          ...product.gender,
        ];
      } else {
        // Otherwise, add the product to the uniqueProducts array
        uniqueProducts.push(product);
      }
    });

    this.patchState({ products: uniqueProducts });
    this._createProductTypeMap(uniqueProducts);
  }
  private _createProductTypeMap(data: productType[]) {
    const productTypeMap: { [key: string]: productType[] } = {};

    data.forEach((item) => {
      const { productType } = item;

      if (productTypeMap.hasOwnProperty(productType)) {
        productTypeMap[productType].push(item);
      } else {
        productTypeMap[productType] = [item];
      }
    });

    this.patchState({ productTypeSpecificList: productTypeMap });
  }
  
}
