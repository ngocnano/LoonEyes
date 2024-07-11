import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NzGridModule, NzFlexModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  constructor(private router:Router){

  }
changeList() {
  this.router.navigateByUrl("/project")
}

}
