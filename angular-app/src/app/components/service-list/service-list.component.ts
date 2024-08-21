import { Component, ElementRef, ViewChild } from '@angular/core';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { ProjectService } from './../project/project.service';
import { YtPlayerComponent } from '../../shared/yt-player/yt-player.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { StartComponent } from '../start/start.component';
import { Route, Router } from '@angular/router';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [
    NzAffixModule,
    YtPlayerComponent,
    NzGridModule,
    NzIconModule,
    StartComponent,
  ],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css',
})
export class ServiceListComponent {


  services:any;

  changeToProject() {
    this.router.navigateByUrl('/contact');
  }


  constructor(
    private projectService: ProjectService,
    private router: Router,
    private common: CommonServiceService
  ) {

    common.type.subscribe(data => {
      this.services = data.filter((item:any) => item.id !== null);
    })

  }

  openMenu() {
    this.common.open();
  }
  changeTo() {
    this.router.navigateByUrl('/');
  }

}
