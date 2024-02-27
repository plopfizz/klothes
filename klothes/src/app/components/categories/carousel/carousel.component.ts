import {
  animate,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { fadeIn, fadeOut } from './carousel.animation';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
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
export class CarouselComponent {
  @Input() slides: any;

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }
}
