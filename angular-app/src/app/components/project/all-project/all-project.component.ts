import { routes } from './../../../app.routes';
import { Component, OnInit } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ProjectService } from '../project.service';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { StartComponent } from "../../start/start.component";
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonServiceService } from '../../../services/common-service.service';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-all-project',
  standalone: true,
  providers: [ProjectService],
  imports: [NzModalModule, NzLayoutModule, NzMenuModule, NzGridModule, NzFlexModule, NzTagModule, CommonModule, NzButtonModule, NzIconModule,
    StartComponent, NzAffixModule, TranslateModule],
  templateUrl: './all-project.component.html',
  styleUrl: './all-project.component.scss'
})
export class AllProjectComponent implements OnInit {
  deleteProject(item: any) {
    this.modal.confirm({
      nzTitle: '<i>Bạn có chắc chắn xóa ?</i>',
      nzContent: '',
      nzBodyStyle: { 'background': 'white' },
      nzOnOk: () => {
        const id = item.id;
        debugger
        this.common.content.vi.project = this.common.content.vi.project.filter(item => item.id != id); // 2nd parameter means remove one item only
        this.common.content.cn.project = this.common.content.cn.project.filter(item => item.id != id); // 2nd parameter means remove one item only
        this.common.content.jp.project = this.common.content.jp.project.filter(item => item.id != id); // 2nd parameter means remove one item only
        this.common.content.en.project = this.common.content.en.project.filter(item => item.id != id); // 2nd parameter means remove one item only
        this.common.saveContent('/project-update')

      }
    });

  }


  changeType(_t19: { id: null; name: string; } | { id: number; name: string; }) {
    this.typeId = _t19.id;
    if (!this.typeId) {
      this.listProjectDateFilter = [...this.listProject];
    } else {
      this.listProjectDateFilter = this.listProject.filter((item: any) => item.type === this.typeId);
    }
    this.paging.page = 0;
    this.paging.numPage = (this.listProjectDateFilter.length / this.paging.size);
    this.changePage(0)

  }
  update = false;
  listProject: any = [];
  listType: any = [];
  listProjectTmp: any[] = [];
  listProjectDateFilter: any[] = [];
  typeId: number | null | undefined
  paging = {
    page: 1,
    numPage: 0,
    size: 6
  }

  constructor(private projectService: ProjectService, private route: ActivatedRoute,
    private router: Router, private common: CommonServiceService, private modal: NzModalService,
    private translate: TranslateService, private title: Title) {
    this.common.project.subscribe((data: any) => {
      this.listProject = data;
      this.listProjectDateFilter = [...this.listProject];
      this.paging.numPage = (this.listProject.length / this.paging.size);
      this.typeId = this.listType[0].id
      this.changePage(0);
    })

    this.common.type.subscribe(data => {
      this.listType = data;
      this.listProjectDateFilter = [...this.listProject];
      this.paging.numPage = (this.listProject.length / this.paging.size);
      this.typeId = this.listType[0].id
      this.changePage(0);
    })


    translate.stream('title.content').subscribe(item => {
      title.setTitle(this.translate.instant('title.project') + item)
    })
    this.update = route.snapshot.data['update']
    console.log(route.snapshot.data['update'])
    if(this.update){
      this.translate.use('vi')
    }

  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.changeType({ id: Number(id), name: '' })
    }
  }

  changePage(page: number) {
    this.paging.page = page;
    this.listProjectTmp = this.getArray(this.paging.size * page, (this.paging.size * (page + 1) - 1), this.listProjectDateFilter)
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

  changeToProject(id: any) {
    this.router.navigate(['/project', { id: id }]);
  }

  changeToProjectDetail(id: any, item: any) {
    if (this.update) {
      this.changeToUpdate(item)
      return
    }
    this.router.navigate(['/project-detail', { id: id }]);
  }

  changeToUpdate(data: any, event?: Event) {
    event?.preventDefault()
    console.log(data)
    if (!data) {
      data = {
        "customer": "KH Test",
        "des": "",
        "id": this.listProject[this.listProject.length - 1].id + 1,
        "loc": "test ",
        "name": "test",
        "no": "500",
        "time": "30/12/2023",
        "type": 2,
        "url": "https://firebasestorage.googleapis.com/v0/b/app-drone-da32e.appspot.com/o/project%2F20%2F%E1%BA%A3nh%20b%C3%ACa%20d%E1%BB%B1%20%C3%A1%20.png?alt=media&token=918b5ae8-c1f4-4bcd-956f-a6ac0b36bf6b",
        "projectDetails": []
      }

      const detail = {
        index: 0,
        "detailType": "text",
        "nzLg": 12,
        "nzMd": 12,
        "nzSm": 24,
        "nzXs": 24,
        "url": " aa "
      }
  
      const vi = { ...data }
      vi.projectDetails = []
      vi.projectDetails.push({ ...detail })
      this.common.content.vi.project.push(vi)
      this.common.mapContent.set('vi#project#' + data.id, vi);
      this.common.mapContent.set('vi#project#' + data.id + '#' + 0, vi.projectDetails[0]);
  
      const cn = { ...data }
      cn.projectDetails = []
      cn.projectDetails.push({ ...detail })
      this.common.content.cn.project.push(cn)
      this.common.mapContent.set('cn#project#' + data.id, cn);
      this.common.mapContent.set('cn#project#' + data.id + '#' + 0, cn.projectDetails[0]);
  
      const en = { ...data }
      en.projectDetails = []
      en.projectDetails.push({ ...detail })
      this.common.content.en.project.push(en)
      this.common.mapContent.set('en#project#' + data.id, en);
      this.common.mapContent.set('en#project#' + data.id + '#' + 0, en.projectDetails[0]);
  
      const jp = { ...data }
      jp.projectDetails = []
      jp.projectDetails.push({ ...detail })
      this.common.content.jp.project.push(jp)
      this.common.mapContent.set('jp#project#' + data.id, en);
      this.common.mapContent.set('jp#project#' + data.id + '#' + 0, jp.projectDetails[0]);
  
  
      this.common.temp = vi;
    }else {
      this.common.temp = data;
    }


    this.router.navigateByUrl('/project-detail-update');
  }

}
