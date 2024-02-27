import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Genders } from '../enums/gender.enum';
import { productType } from '../interfaces/clothes.interface';
import { products } from '../mock-data/mockData';
import { MainComponentStore } from './main-component.store';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss',
  providers: [MainComponentStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponentComponent {
  isLoading$ = this.mainComponentStore.isLoading$;
  selectedGender$ = this.mainComponentStore.selectedGender$;
  genders$ = this.mainComponentStore.genders$;
  products$ = this.mainComponentStore.products$;
  productTypeSpecificList$ = this.mainComponentStore.productTypeSpecificList$;
  constructor(private mainComponentStore: MainComponentStore) {
    this.mainComponentStore.appendGendersForSameName(products);
  }
  objectKeys(obj: {
    productTypeSpecificList: { [key: string]: productType[] } | null;
    selectedGender: string | null;
  }): { key: string; value: productType[] }[] {

    if (obj.productTypeSpecificList === null || obj.selectedGender === null) {
      return []; // Return an empty array if either property is null
    }

    // Filter the data based on the selected gender
    const filteredData: { [key: string]: productType[] } = {};
    Object.keys(obj.productTypeSpecificList).forEach((key) => {
      if (obj.productTypeSpecificList === null || obj.selectedGender === null) {
        return; // Return an empty array if either property is null
      }
      const filtered = obj.productTypeSpecificList[key]?.filter((data) =>
        data.gender.includes(obj.selectedGender as Genders)
      );
      if (filtered && filtered.length > 0) {
        filteredData[key] = filtered;
      }
    });


    // Return an array of key-value pairs
    return Object.keys(filteredData).map((key) => ({
      key,
      value: filteredData[key],
    }));
  }
}
