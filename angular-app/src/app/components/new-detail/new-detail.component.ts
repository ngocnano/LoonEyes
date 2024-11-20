import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzCarouselModule, NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonServiceService } from '../../services/common-service.service';
import { lang, SIZE_TYPE } from '../../services/constan';
import { YtPlayerComponent } from '../../shared/yt-player/yt-player.component';
import { ProjectService } from '../project/project.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { EditComponent } from '../../shared/edit/edit.component';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-new-detail',
  standalone: true,
  imports: [NzAffixModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzGridModule,
    YtPlayerComponent,
    NzCarouselModule,
    TranslateModule,
    NzFlexModule],
  templateUrl: './new-detail.component.html',
  styleUrl: './new-detail.component.scss'
})
export class NewDetailComponent {
  deleteItem(item: any, id: any) {
    this.modal.confirm({
      nzTitle: '<i>Bạn có chắc chắn xóa ?</i>',
      nzContent: '',
      nzBodyStyle: { 'background': 'white' },
      nzOnOk: () => {
        lang.forEach((l:any) => {
          const pj = (this.common.content as any)[l].new.find((itemP:any) => itemP.id === id);
          pj.newDetail = pj.newDetail.filter((itemK:any) => itemK.index != item.index)
        })
        // this.common.content.vi.project = this.common.content.vi.project.find(item => item.id === id); // 2nd parameter means remove one item only
        // this.common.content.cn.project = this.common.content.cn.project.find(item => item.id === id); // 2nd parameter means remove one item only
        // this.common.content.jp.project = this.common.content.jp.project.find(item => item.id === id); // 2nd parameter means remove one item only
        // this.common.content.en.project = this.common.content.en.project.find(item => item.id === id); // 2nd parameter means remove one item only
        // this.common.saveContent('/project-update')

      }
    });
  }
  add() {
    const obj = {
      index: this.project.newDetail[this.project.newDetail.length - 1].index + 1,
      "detailType": "text",
      "nzLg": 24,
      "nzMd": 24,
      "nzSm": 24,
      "nzXs": 24,
      "url": ""
    }

    const key = '#new#' + this.project.id;
    const vi = { ...obj };
    this.common.mapContent.set('vi' + key + '#' + obj.index, vi);
    const cn = { ...obj };
    this.common.mapContent.set('cn' + key + '#' + obj.index, cn);
    const en = { ...obj };
    this.common.mapContent.set('en' + key + '#' + obj.index, en);
    const jp = { ...obj };
    this.common.mapContent.set('jp' + key + '#' + obj.index, jp);
    this.common.mapContent.get('vi' + key).newDetail.push(vi)
    this.common.mapContent.get('cn' + key).newDetail.push(cn)
    this.common.mapContent.get('en' + key).newDetail.push(en)
    this.common.mapContent.get('jp' + key).newDetail.push(jp)
    console.log(this.common.content, 'content')
    this.edit(vi, 'url', obj.detailType, this.project.id)
  }
  edit(value: any, name: any, type?: string, child?: string): void {
    const mo = this.modal.create({
      nzBodyStyle: { 'background': 'white' },
      nzTitle: 'Chỉnh sửa nội dung',
      nzData: { text: 'xxxxxxxxxxxxx' },
      nzContent: EditComponent,
      nzOnOk: () => {

      }
    });

    if (mo.componentInstance) {
      if (type) {
        mo.componentInstance.type = type;
      } else {
        mo.componentInstance.type = 'text'
      }
      if (child) {
        mo.componentInstance.keyChild = child + '#' + value.index;
      }
      mo.componentInstance.obj = value;
      mo.componentInstance.key = name;
      if (value.detailType) {
        mo.componentInstance.keyType = 'detailType'
      }
      mo.componentInstance.contentType = 'new'

      mo.componentInstance.setValue();
    }

  }
  save() {
    this.common.saveContent('/new-update')
  }
  news: any;
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
      this.news = [...item]
      this.ngOnInit()
    })


    translate.stream('title.content').subscribe(item => {
      title.setTitle(this.translate.instant('title.new') + item)
    })
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.update = this.route.snapshot.data['update']

    if (this.update) {

      this.project = this.common.temp as any
      if (!this.project) {
        this.router.navigateByUrl('/new-update')
      }
      this.translate.use('vi')
    } else {
      if (!id) {
        this.changeTo();
      } else {

        this.project = this.news.find((item: any) => item.id === Number(id));
        console.log(this.project)
      }
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
    this.router.navigate(['/new-detail', { id: id }]).then(() => { window.location.reload(); });
  }
}
