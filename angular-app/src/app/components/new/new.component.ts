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
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [NzModalModule,NzGridModule, NzCarouselModule, NzFlexModule, NzAffixModule, YtPlayerComponent, NzButtonModule,
    NzIconModule, NzTagModule, CommonModule, TranslateModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss',
})
export class NewComponent {
  deleteProject(_t10: any) {
    this.modal.confirm({
      nzTitle: '<i>Bạn có chắc chắn xóa ?</i>',
      nzContent: '',
      nzBodyStyle: { 'background': 'white' },
      nzOnOk: () => {
        const id = _t10.id;
        debugger
        this.common.content.vi.new = this.common.content.vi.new.filter(item => item.id != id); // 2nd parameter means remove one item only
        this.common.content.cn.new = this.common.content.cn.new.filter(item => item.id != id); // 2nd parameter means remove one item only
        this.common.content.jp.new = this.common.content.jp.new.filter(item => item.id != id); // 2nd parameter means remove one item only
        this.common.content.en.new = this.common.content.en.new.filter(item => item.id != id); // 2nd parameter means remove one item only
        this.common.saveContent('/new-update')

      }
    });
  }
  changeToUpdate(data: any) {

    console.log(data)
    if (!data) {

      data = {
        "id": this.common.content.vi.new[this.common.content.vi.new.length - 1].id + 1,
        "text": "test ",
        "title": "test",
        "img": "https://firebasestorage.googleapis.com/v0/b/app-drone-da32e.appspot.com/o/project%2F20%2F%E1%BA%A3nh%20b%C3%ACa%20d%E1%BB%B1%20%C3%A1%20.png?alt=media&token=918b5ae8-c1f4-4bcd-956f-a6ac0b36bf6b",
        "newDetail": []
      }
      const detail = {
        index: 0,
        "detailType": "text",
        "nzLg": 24,
        "nzMd": 24,
        "nzSm": 24,
        "nzXs": 24,
        "url": " aa "
      }

      const vi = { ...data }
      vi.newDetail = []
      vi.newDetail.push({ ...detail })
      this.common.content.vi.new.push(vi)
      this.common.mapContent.set('vi#new#' + data.id, vi);
      this.common.mapContent.set('vi#new#' + data.id + '#' + 0, vi.newDetail[0]);

      const cn = { ...data }
      cn.newDetail = []
      cn.newDetail.push({ ...detail })
      this.common.content.cn.new.push(cn)
      this.common.mapContent.set('cn#new#' + data.id, cn);
      this.common.mapContent.set('cn#new#' + data.id + '#' + 0, cn.newDetail[0]);

      const en = { ...data }
      en.newDetail = []
      en.newDetail.push({ ...detail })
      this.common.content.en.new.push(en)
      this.common.mapContent.set('en#new#' + data.id, en);
      this.common.mapContent.set('en#new#' + data.id + '#' + 0, en.newDetail[0]);

      const jp = { ...data }
      jp.newDetail = []
      jp.newDetail.push({ ...detail })
      this.common.content.jp.new.push(jp)
      this.common.mapContent.set('jp#new#' + data.id, en);
      this.common.mapContent.set('jp#new#' + data.id + '#' + 0, jp.newDetail[0]);
      this.common.temp = vi;
    } else {
      this.common.temp = data;
    }







    this.router.navigateByUrl('/new-detail-update');
  }
  news: any;
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
  update = false

  constructor(
    private modal: NzModalService,
    private projectService: ProjectService,
    private router: Router,
    private common: CommonServiceService,
    private route: ActivatedRoute,
    private translate: TranslateService, private title: Title
  ) {
    this.common.new.subscribe(item => {
      console.log("change", item)
      this.news = [...item]
      this.ngOnInit()
    })


    translate.stream('title.content').subscribe(item => {
      title.setTitle(this.translate.instant('title.new') + item)
    })
    this.update = route.snapshot.data['update']
    console.log(route.snapshot.data['update'])
    if (this.update) {
      this.translate.use('vi')
    }
  }
  ngOnInit(): void {
    this.paging.numPage = (this.news.length / this.paging.size);
    this.changePageMain(0)
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

  changePageMain(page: number) {
    this.paging.page = page;
    this.new = this.getArray(this.paging.size * page, (this.paging.size * (page + 1) - 1), this.news)
  }

  getArray(from: number, to: number, arr: any[]): any[] {
    const newArr: any[] = []
    arr.forEach((item, index) => {
      if (index >= from && index <= to) {
        newArr.push(item);
      }
    });
    return newArr;
  }

  initArr(n: number) {
    const newArr: any[] = []
    for (let i = 0; i < n; i++) {
      newArr.push(i + 1);
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
        to = this.news.length;
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
  changeToNewDetail(id: any, item: any) {
    if (this.update) {
      this.changeToUpdate(item)
      return
    }
    this.router.navigate(['/new-detail', { id: id }]);
  }
}
