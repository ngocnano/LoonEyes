import { CommonServiceService } from './../../services/common-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ProjectService } from '../project/project.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [NzGridModule, NzFlexModule, TranslateModule, CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  service:any;
  constructor(private router: Router, private common:CommonServiceService) {
    this.common.type.subscribe((data:any) => {
      this.service = data.filter((item:any) => item.show);
    })

  }

  change() {
    this.router.navigateByUrl('/service');
  }

  changeToProject(id:any){
    // if(!id || id == 4){
    //   this.router.navigate(["/project"])
    //   return
    // }
    this.router.navigate(["/service", {id:id}])
}
}
