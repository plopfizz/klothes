import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../services/filter.service';
@Component({
  selector: 'app-price-range-filter',
  standalone: true,
  imports: [FormsModule, NgxSliderModule],
  templateUrl: './price-range-filter.component.html',
  styleUrl: './price-range-filter.component.scss',
})
export class PriceRangeFilterComponent implements OnInit {
  priceRange: { start: number; end: number } = { start: 0, end: 0 };

  constructor(private filterService: FilterService) {}
  @Output() priceRangeChange = new EventEmitter<{
    start: number;
    end: number;
  }>();
  ngOnInit(): void {
    this.filterService.filters$.subscribe((filters) => {
      console.log(filters, 'these are the filters');
    });
  }

  calculateSelectionWidth(): number {
    const totalWidth = 100;
    const range = this.priceRange.end - this.priceRange.start;
    const width = (range / 1000) * totalWidth;
    return width;
  }
  // onPriceRangeChange(): void {
  //   this.priceRangeChange.emit({
  //     start: this.priceRange.start,
  //     end: this.priceRange.end,
  //   });
  //   this.filterService.setPriceRange(
  //     this.priceRange.start,
  //     this.priceRange.end
  //   );
  // }
  updateFilter() {
    console.log('hi');
    this.filterService.setPriceRange(
      this.priceRange.start,
      this.priceRange.end
    );
  }
}
