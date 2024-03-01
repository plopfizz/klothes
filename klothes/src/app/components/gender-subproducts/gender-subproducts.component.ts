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

  navigate(gender: string) {
    if (
      gender === Genders.WOMEN ||
      gender === Genders.MEN ||
      gender === Genders.KID
    ) {
      this.mainComponentStore.setGender(gender);
      this.router.navigate(['/browse', gender]);
    } else {
      // Handle invalid type
      // Display an error message or redirect to a default route
    }
  }
}
