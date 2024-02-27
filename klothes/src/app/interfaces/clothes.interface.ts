import { DifferentCategories, Genders, ProductTypes } from '../enums/gender.enum';

export interface productType {
  name: string;
  productType: ProductTypes;
  type: DifferentCategories;
  gender: Genders[];
}
