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

@Component({
  selector: 'app-all-project',
  standalone: true,
  providers: [ProjectService],
  imports: [NzLayoutModule, NzMenuModule, NzGridModule, NzFlexModule, NzTagModule, CommonModule, NzButtonModule, NzIconModule,
    StartComponent, NzAffixModule, TranslateModule],
  templateUrl: './all-project.component.html',
  styleUrl: './all-project.component.scss'
})
export class AllProjectComponent implements OnInit{


changeType(_t19: { id: null; name: string; }|{ id: number; name: string; }) {
  this.typeId = _t19.id;
  if(!this.typeId){
    this.listProjectDateFilter = [...this.listProject];
  } else {
    this.listProjectDateFilter = this.listProject.filter((item:any) => item.type === this.typeId);
  }
  this.paging.page = 0;
  this.paging.numPage = (this.listProjectDateFilter.length / this.paging.size);
  this.changePage(0)

}
  update = false;
  listProject:any = [];
  listType:any = [];
  listProjectTmp:any[] = [];
  listProjectDateFilter:any[] = [];
  typeId: number | null | undefined
  paging = {
    page: 1,
    numPage: 0,
    size: 6
  }

constructor(private projectService:ProjectService, private route:ActivatedRoute, 
  private router:Router, private common:CommonServiceService,
  private translate:TranslateService, private title:Title){
  this.common.project.subscribe((data:any) => {
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

}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if(id) {
      this.changeType({id:Number(id), name: ''})
    }
  }

  changePage(page:number){
    this.paging.page = page;
    this.listProjectTmp = this.getArray(this.paging.size * page, (this.paging.size * (page + 1) - 1), this.listProjectDateFilter)
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

  changeToProject(id: any) {
    this.router.navigate(['/project', { id: id }]);
  }

  changeToProjectDetail(id: any, item:any) {
    if(this.update){
      this.changeToUpdate(item)
      return
    }
    this.router.navigate(['/project-detail', { id: id }]);
  }

  changeToUpdate(data:any, event?:Event) {
    event?.preventDefault()
    console.log(data)
    if(!data){
      data =  {
        "customer": "",
        "des": "",
        "google": "https://firebasestorage.googleapis.com/v0/b/app-drone-da32e.appspot.com/o/intro%2FDrone_INTRO.mp4?alt=media&token=9710d4e7-39fb-47ed-a349-abaefaa573c4IsOV3js",
        "id": null,
        "loc": "",
        "name": "",
        "no": "",
        "projectDetails": [
            {
                "detailType": "text",
                "nzLg": 12,
                "nzMd": 12,
                "nzSm": 24,
                "nzXs": 24,
                "url": "Giải thưởng Quảng cáo Sáng tạo Việt Nam - Vạn Xuân Awards là giải thưởng cấp quốc gia được trao tặng bởi Bộ Văn hóa, Thể thao và Du lịch, nhằm tôn vinh những người làm quảng cáo, vinh danh tác phẩm quảng cáo nổi bật, có sức ảnh hưởng đến cộng đồng, xã hội. "
            }]
          }
    } 
    this.common.temp = data;
    this.router.navigateByUrl('/project-detail-update');
  }

}
