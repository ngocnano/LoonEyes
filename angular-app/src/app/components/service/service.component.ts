import { CommonServiceService } from './../../services/common-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ProjectService } from '../project/project.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [NzGridModule, NzFlexModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  service:any;
  constructor(private router: Router, private common:CommonServiceService) {
    this.common.type.subscribe((data:any) => {
      this.service = data.filter((item:any) => item.id);
    })

  }

  change() {
    this.router.navigateByUrl('/service');
  }

  changeToProject(id:any){
    this.router.navigate(["/project", {id:id}])
}
}
