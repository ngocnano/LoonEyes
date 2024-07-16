import { Component } from '@angular/core';

@Component({
  selector: 'app-common-component',
  standalone: true,
  imports: [],
  templateUrl: './common-component.component.html',
  styleUrl: './common-component.component.css'
})
export class CommonComponentComponent {

  protected size:any;

  constructor() {

  }

}
