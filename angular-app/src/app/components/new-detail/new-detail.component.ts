import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzCarouselModule, NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonServiceService } from '../../services/common-service.service';
import { SIZE_TYPE } from '../../services/constan';
import { YtPlayerComponent } from '../../shared/yt-player/yt-player.component';
import { ProjectService } from '../project/project.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-detail',
  standalone: true,
  imports: [    NzAffixModule,
    NzGridModule,
    YtPlayerComponent,
    NzCarouselModule,
    TranslateModule,
    NzFlexModule],
  templateUrl: './new-detail.component.html',
  styleUrl: './new-detail.component.scss'
})
export class NewDetailComponent {
  news:any;
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
    private route: ActivatedRoute,
    private translate:TranslateService, private title:Title
  ) {
    this.common.new.subscribe(item => {
      this.news = [...item]
      this.ngOnInit()
    })


    translate.stream('title.content').subscribe(item => {
      title.setTitle(this.translate.instant('title.new') + item)
    })
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (!id) {
      this.changeTo();
    } else {
      
      this.project = this.news.find((item: any) => item.id === Number(id));
      console.log(this.project)
    }
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
    this.total = this.news.length / size;
    this.array = [];
    for (let i = 0; i < this.total; i++) {
      this.array.push(i);
      let index = i * size;
      let to = index + size;
      if (to > this.news.length - 1) {
        to = this.news.length;
      }
      this.showItem.push([...this.news.slice(index, to)]);
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
  changeToNewDetail(id: any) {
    this.router.navigate(['/new-detail', { id: id }]).then(() => {window.location.reload();});
  }
}
