import { Component } from '@angular/core';
import { BackgroudComponent } from '../backgroud/backgroud.component';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [BackgroudComponent, StarComponent],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {


  getStyleStar() {
    return Math.floor(Math.random() * 100);
  }

}
