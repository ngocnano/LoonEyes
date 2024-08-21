import { Component } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonServiceService } from '../../services/common-service.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NzGridModule, NzCollapseModule, NzIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  menu:any
  ct:any
  constructor(private commonServiceService:CommonServiceService, private router:Router) {
    commonServiceService.menu.subscribe(data => {
      this.menu = data;
    })
    commonServiceService.ct.subscribe(data => {
      this.ct = data;
    })
  }

  changeRouter(url:string){
    this.router.navigateByUrl(url);
  }

}
