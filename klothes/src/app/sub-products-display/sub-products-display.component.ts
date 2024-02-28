import { transition, trigger, useAnimation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { fadeIn, fadeOut } from '../components/carousel/carousel.animation';
import { MainComponentStore } from '../main-component/main-component.store';

@Component({
  selector: 'app-sub-products-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-products-display.component.html',
  styleUrl: './sub-products-display.component.scss',
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        useAnimation(fadeIn, { params: { time: '1300ms' } }),
      ]),
      transition('* => void', [
        useAnimation(fadeOut, { params: { time: '1300ms' } }),
      ]),
    ]),
  ],
})
export class SubProductsDisplayComponent {
  @Input() subProductData: any;
  selectedGender$ = this.mainComponentStore.selectedGender$;
  organizedData: any[] = [];
  constructor(private mainComponentStore: MainComponentStore){

  }
  ngOnInit() {
    this.organizedData = this.organizeDataByType(this.subProductData);
  }

  // Define a method to organize the data by type
  organizeDataByType(data: any[]): any[] {
    const organizedData = [];
    const typeMap = new Map();

    // Group data by type
    data.forEach((item) => {
      if (!typeMap.has(item.type)) {
        typeMap.set(item.type, []);
      }
      typeMap.get(item.type).push(item.name);
    });

    // Convert the map to an array of objects
    for (const [type, names] of typeMap.entries()) {
      organizedData.push({ type, names });
    }

    return organizedData;
  }
}
