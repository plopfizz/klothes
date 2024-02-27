import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Genders } from '../../enums/gender.enum';
import { MainComponentStore } from '../../main-component/main-component.store';
@Component({
  selector: 'app-gender-subproducts',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './gender-subproducts.component.html',
  styleUrl: './gender-subproducts.component.scss',
})
export class GenderSubproductsComponent {
  constructor(
    private router: Router,
    private mainComponentStore: MainComponentStore
  ) {}
  @Input() gendersList: Genders[] = [];

  navigate(type: string) {
    if (
      type === Genders.WOMEN ||
      type === Genders.MEN ||
      type === Genders.KID
    ) {
      this.mainComponentStore.setGender(type);
      this.router.navigate(['/browse', type]);
    } else {
      // Handle invalid type
      // Display an error message or redirect to a default route
    }
  }
}
