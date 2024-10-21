import { Component } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {

  logo:any[] = []
  constructor(private common: CommonServiceService){
    common.logo.subscribe(logo => {
      this.logo = logo;
    })
  }

}
