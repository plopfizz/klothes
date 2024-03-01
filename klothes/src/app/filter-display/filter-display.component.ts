import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-display.component.html',
  styleUrl: './filter-display.component.scss',
})
export class FilterDisplayComponent {
  @Input() selectedFilters: any;
  removeFilter(category: string, value: string): void {
    const index = this.selectedFilters[category].indexOf(value);
    if (index !== -1) {
      this.selectedFilters[category].splice(index, 1);
    }
  }
}
