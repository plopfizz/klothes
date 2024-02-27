import { Component } from '@angular/core';
import { CarouselComponent } from '../components/categories/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public slides = [
    { src: '../../assets/image1.jpg' },
    { src: '../../assets/image2.jpg' },
    { src: '../../assets/image3.jpg' },
    { src: '../../assets/image4.jpg' },
    { src: '../../assets/image5.jpg' },
    { src: '../../assets/image6.jpg' },
    { src: '../../assets/image7.jpg' },
  ];
}
