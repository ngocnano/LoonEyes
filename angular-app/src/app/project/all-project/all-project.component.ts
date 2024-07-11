import { Component, OnInit } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ProjectService } from '../project.service';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'app-all-project',
  standalone: true,
  providers: [ProjectService],
  imports: [NzLayoutModule, NzMenuModule, NzGridModule, NzFlexModule, NzTagModule],
  templateUrl: './all-project.component.html',
  styleUrl: './all-project.component.css'
})
export class AllProjectComponent implements OnInit{


changeType(_t19: { id: null; name: string; }|{ id: number; name: string; }) {
  this.typeId = _t19.id;
  if(this.typeId === null){
    this.listProjectDateFilter = [...this.listProject];
  } else {
    this.listProjectDateFilter = this.listProject.filter(item => item.type === this.typeId);
  }
  this.paging.page = 0;
  this.paging.numPage = (this.listProjectDateFilter.length / this.paging.size);
  this.changePage(0)

}

  listProject;
  listType;
  listProjectTmp:any[] = [];
  listProjectDateFilter:any[] = [];
  typeId: number | null | undefined
  paging = {
    page: 1,
    numPage: 0,
    size: 6
  }

constructor(private projectService:ProjectService){
  this.listProject = projectService.project;
  this.listType = projectService.type;
  this.listProjectDateFilter = [...this.listProject];
  this.paging.numPage = (this.listProject.length / this.paging.size);
  this.typeId = this.listType[0].id
  this.changePage(0);
}
  ngOnInit(): void {
    
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

}
