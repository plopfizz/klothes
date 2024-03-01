import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select'; // Also for MatSelect
import { PriceRangeFilterComponent } from '../price-range-filter/price-range-filter.component';
@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatListModule,
    CommonModule,
    PriceRangeFilterComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements OnInit {
  selectedColors: { color: string; name: string }[] = []; // Assuming this array holds the selected colors
  subtitle: string = ''; // Initial subtitle value
  colors = [
    { color: 'rgb(35, 31, 32)', name: 'Black' },
    { color: 'rgb(67, 145, 233)', name: 'Blue' },
    { color: 'rgb(187, 139, 104)', name: 'Brown' },
    { color: 'rgb(239, 196, 85)', name: 'Gold' },
    { color: 'rgb(125, 125, 132)', name: 'Gray' },
    { color: 'rgb(40, 174, 102)', name: 'Green' },
    { color: 'rgb(251, 161, 96)', name: 'Orange' },
    { color: 'rgb(255, 172, 187)', name: 'Pink' },
    { color: 'rgb(195, 136, 193)', name: 'Purple' },
  ];
  ngOnInit() {
    this.toggleSelection({ color: '', name: 'All' });
  }
  toggleSelection(color: { color: string; name: string }): void {
    if (color.name === 'All') {
      if (this.selectedColors.length === this.colors.length) {
        this.selectedColors = [];
      } else {
        this.selectedColors = [...this.colors];
      }
    } else {
      const index = this.selectedColors.findIndex((c) => c.name === color.name);
      if (index > -1) {
        this.selectedColors.splice(index, 1);
      } else {
        this.selectedColors.push(color);
      }
    }
    this.updateSubtitle();
  }
  isColorSelected(color: any): boolean {
    return this.selectedColors.some((c) => c.name === color.name);
  }
  updateSubtitle(): void {
    if (this.selectedColors.length === 0) {
      this.subtitle = '';
    } else if (this.selectedColors.length === this.colors.length) {
      this.subtitle = 'All';
    } else if (this.selectedColors.length <= 3) {
      this.subtitle = this.selectedColors.map((color) => color.name).join(', ');
    } else {
      this.subtitle =
        this.selectedColors
          .slice(0, 3)
          .map((color) => color.name)
          .join(', ') + ' +3 more';
    }
  }
}
