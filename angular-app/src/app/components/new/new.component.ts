import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzCarouselComponent, NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonServiceService } from '../../services/common-service.service';
import { SIZE_TYPE } from '../../services/constan';
import { ProjectService } from '../project/project.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { YoutubePlayerComponent } from 'ngx-youtube-player';
import { YtPlayerComponent } from '../../shared/yt-player/yt-player.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [NzGridModule, NzCarouselModule, NzFlexModule, NzAffixModule, YtPlayerComponent, 
    NzIconModule, NzTagModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss',
})
export class NewComponent {
  news:any;
  new: any;
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
  paging = {
    page: 1,
    numPage: 0,
    size: 4
  }

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private common: CommonServiceService,
    private route: ActivatedRoute
  ) {
    this.common.new.subscribe(item => {
      this.news = [...item]
    })
    this.paging.numPage = (this.news.length / this.paging.size);
    this.changePageMain(0)
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

  changePageMain(page:number){
    this.paging.page = page;
    this.new = this.getArray(this.paging.size * page, (this.paging.size * (page + 1) - 1), this.news)
  }

  getArray(from:number, to:number, arr:any[]):any[]{
    const newArr:any[] = []
    arr.forEach((item, index) => {
      if(index >= from && index <= to){
        newArr.push(item);
      }
    });
    return newArr;
  }

  initArr(n:number){
    const newArr:any[] = []
    for(let i = 0; i < n; i++){
      newArr.push(i+1);
    }
    return newArr;

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
        to = this.news.length - 1;
      }
      this.showItem.push([...this.news.slice(index, to)]);
    }
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
    this.router.navigate(['/new-detail', { id: id }]);
  }
}
