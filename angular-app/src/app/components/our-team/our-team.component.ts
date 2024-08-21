import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FromToInterface,
  NzCarouselComponent,
  NzCarouselModule,
} from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonServiceService } from '../../services/common-service.service';
import { SIZE_TYPE } from '../../services/constan';
import { HighlightDirective } from '../../pipe/img-our.directive';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [NzGridModule, NzCarouselModule, HighlightDirective, NzFlexModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css',
})
export class OurTeamComponent implements OnInit {
  @ViewChild(NzCarouselComponent, { static: false })
  myCarousel!: NzCarouselComponent;
  nzSpan = 6
  goToNextPage() {
    let nextPage = this.currentPage + 1;
    if (nextPage > this.total) {
      nextPage = 0;
    }
    this.myCarousel.goTo(nextPage);
  }
  changePage($event: any) {
    this.currentPage = $event;
  }
  constructor(private commonService: CommonServiceService) {}
  currentPage: number = 0;
  total: number = 0;
  ngOnInit(): void {
    this.commonService.mediaBreakpoint$.subscribe(size => {
      if ([SIZE_TYPE.XXL].includes(size)) {
      this.refresh(4);
      this.nzSpan = 6
    } else if ([SIZE_TYPE.XL].includes(this.commonService.size)) {
      this.refresh(4);
      this.nzSpan = 6
    } else if ([SIZE_TYPE.MD, SIZE_TYPE.LG].includes(this.commonService.size)) {
      this.refresh(3);
      this.nzSpan = 8
    } else {
      this.refresh(2);
      this.nzSpan = 12
    }
  })
}

  refresh(size: number) {
    this.showItem = []
    this.total = this.ourTeam.length / size;
    this.array = [];
    for (let i = 0; i < this.total; i++) {
      this.array.push(i);
      let index = i * size;
      let to = index + size;
      if (to > this.ourTeam.length - 1) {
        to = this.ourTeam.length - 1;
      }
      this.showItem.push([...this.ourTeam.slice(index, to)]);
    }
  }

  showItem: any = [];

  ourTeam = [
    {
      url: '/assest/image/our.JPG',
      name: 'Hoàng Việt Long',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: 'Đỗ Hoàng Anh',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: 'Trương Tuệ An',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: 'Trần Minh Ngọc',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: 'Lê Trung Dương',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: 'Nguyễn Lan Anh',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: '',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: '',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: '',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: '',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: '',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: '',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: '',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: '',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: '',
      job: 'Chief Executive Officer',
    },
    {
      url: '/assest/image/our.JPG',
      name: '',
      job: 'Chief Executive Officer',
    },
  ];

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  dotPosition = 'top';
}