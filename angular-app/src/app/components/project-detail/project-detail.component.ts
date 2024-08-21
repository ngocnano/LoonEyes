import { filter } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StartComponent } from '../start/start.component';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { ProjectService } from '../project/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from '../../services/common-service.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { YtPlayerComponent } from '../../shared/yt-player/yt-player.component';
import { NzCarouselComponent, NzCarouselModule } from 'ng-zorro-antd/carousel';
import { SIZE_TYPE } from '../../services/constan';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    StartComponent,
    NzAffixModule,
    NzGridModule,
    YtPlayerComponent,
    NzCarouselModule,
    NzFlexModule,
  ],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  projects;
  project: any;
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  dotPosition = 'top';
  changeToProject(id: any) {
    this.router.navigate(['/project', { id: id }]);
  }
  @ViewChild(NzCarouselComponent, { static: false })
  myCarousel!: NzCarouselComponent;
  nzSpan = 6;
  currentPage: number = 0;
  total: number = 0;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private common: CommonServiceService,
    private route: ActivatedRoute
  ) {
    this.projects = projectService.project;
    const id = this.route.snapshot.params['id'];
    if (!id) {
      this.changeTo();
    } else {
      this.project = this.projects.find((item: any) => item.id === Number(id));
    }
  }
  ngOnInit(): void {
    this.common.mediaBreakpoint$.subscribe((size) => {
      if ([SIZE_TYPE.XXL].includes(size)) {
        this.refresh(4);
        this.nzSpan = 6;
      } else if ([SIZE_TYPE.XL].includes(this.common.size)) {
        this.refresh(3);
        this.nzSpan = 8;
      } else if ([SIZE_TYPE.MD, SIZE_TYPE.LG].includes(this.common.size)) {
        this.refresh(3);
        this.nzSpan = 8;
      } else {
        this.refresh(2);
        this.nzSpan = 12;
      }
    });
  }

  openMenu() {
    this.common.open();
  }
  changeTo() {
    this.router.navigateByUrl('/');
  }

  refresh(size: number) {
    this.showItem = [];
    this.total = this.projects.length / size;
    this.array = [];
    for (let i = 0; i < this.total; i++) {
      this.array.push(i);
      let index = i * size;
      let to = index + size;
      if (to > this.projects.length - 1) {
        to = this.projects.length - 1;
      }
      this.showItem.push([...this.projects.slice(index, to)]);
    }
    console.log(this.showItem, this.projectService.project)
  }

  changePage($event: any) {
    this.currentPage = $event;
  }

  goToNextPage() {
    let nextPage = this.currentPage + 1;
    if (nextPage > this.total) {
      nextPage = 0;
    }
    this.myCarousel.goTo(nextPage);
  }

  showItem: any = [];
  changeToProjectDetail(id: any) {
    this.router.navigate(['/project-detail', { id: id }]).then(() => {window.location.reload();});
  }
}
