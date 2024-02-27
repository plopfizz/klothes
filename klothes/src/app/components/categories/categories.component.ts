import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenderSubproductsComponent } from '../gender-subproducts/gender-subproducts.component';
import { Genders } from '../../enums/gender.enum';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule, CommonModule, GenderSubproductsComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  @Input() gendersList: Genders[]=[];
  constructor(){

  }
}
