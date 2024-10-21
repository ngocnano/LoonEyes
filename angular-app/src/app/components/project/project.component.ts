import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ProjectService } from './project.service';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { CommonServiceService } from '../../services/common-service.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NzGridModule, NzFlexModule, NzCardModule, NgTemplateOutlet, TranslateModule, CommonModule ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  project:any = [];

  constructor(private router:Router, private projectService: CommonServiceService){
    
    projectService.project.subscribe(data => {
      if(data.length > 0) {
        this.project = data.slice(0, 3);
      } else {
        this.project = []
      }
    
    })
  }
changeList() {
  this.router.navigateByUrl("/project")
}

changeDetail(id:number) {
  this.router.navigate(['/project-detail', { id: id }]);
}

}
