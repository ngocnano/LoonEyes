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

@Component({
  selector: 'app-all-project',
  standalone: true,
  providers: [ProjectService],
  imports: [NzLayoutModule, NzMenuModule, NzGridModule, NzFlexModule, NzTagModule, StartComponent, NzAffixModule],
  templateUrl: './all-project.component.html',
  styleUrl: './all-project.component.scss'
})
export class AllProjectComponent implements OnInit{


changeType(_t19: { id: null; name: string; }|{ id: number; name: string; }) {
  this.typeId = _t19.id;
  if(this.typeId === null){
    this.listProjectDateFilter = [...this.listProject];
  } else {
    this.listProjectDateFilter = this.listProject.filter((item:any) => item.type === this.typeId);
  }
  this.paging.page = 0;
  this.paging.numPage = (this.listProjectDateFilter.length / this.paging.size);
  this.changePage(0)

}

  listProject:any;
  listType:any;
  listProjectTmp:any[] = [];
  listProjectDateFilter:any[] = [];
  typeId: number | null | undefined
  paging = {
    page: 1,
    numPage: 0,
    size: 6
  }

constructor(private projectService:ProjectService, private route:ActivatedRoute, private router:Router, private common:CommonServiceService){
  this.common.project.subscribe(data => {
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

  changeToProjectDetail(id: any) {
    this.router.navigate(['/project-detail', { id: id }]);
  }

}
