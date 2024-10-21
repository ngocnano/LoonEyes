import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { ProjectService } from './../project/project.service';
import { YtPlayerComponent } from '../../shared/yt-player/yt-player.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { StartComponent } from '../start/start.component';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { CommonServiceService } from '../../services/common-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [
    NzAffixModule,
    YtPlayerComponent,
    NzGridModule,
    NzIconModule,
    StartComponent,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss',
})
export class ServiceListComponent implements AfterViewInit{


  services:any;

  changeToProject() {
    this.router.navigateByUrl('/project');
  }


  constructor(
    private projectService: ProjectService,
    private route:ActivatedRoute,
    private router: Router,
    private common: CommonServiceService,
    private translate:TranslateService, private title:Title
  ) {

    common.type.subscribe(data => {
      this.services = data.filter((item:any) => item.id);
    })
    translate.stream('title.content').subscribe(item => {
      title.setTitle(this.translate.instant('title.service') + item)
    })
  }
  ngAfterViewInit(): void {
    const id = this.route.snapshot.params['id'];
    if(id) {
      this.scroll(id)
    }
  }

  scroll(id:any) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id + 'xxxx');
    setTimeout(() => {
      el?.scrollIntoView({behavior:"smooth", block: "center"});
    }, 500)
    el?.scrollIntoView({behavior:"smooth", block: "center"});
  }

  openMenu() {
    this.common.open();
  }
  changeTo() {
    this.router.navigateByUrl('/');
  }

  onChange(e:any) {
      console.log(e)
  }

}
