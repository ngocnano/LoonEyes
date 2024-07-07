import { Component, OnInit } from '@angular/core';
import { BackgroudComponent } from './backgroud/backgroud.component';
import { StarComponent } from './star/star.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    BackgroudComponent,
    StarComponent,
    NzMenuModule,
    NzToolTipModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  focusB = false;

  menu = [
    { title: 'Về chúng tối', selected: true },
    { title: 'Dự án' },
    { title: 'Dịch vụ' },
    { title: 'Tin tức' },
    { title: 'Liên hệ' },
  ];

  star: string[] = [];

  isCollapsed = true;

  viewInfo = [{
    number: '100M',
    title: 'Lượt xem'
  },
  {
    number: '4.75+',
    title: 'Đánh giá cao'
  },
  {
    number: '700',
    title: 'Dự án hoàn thiện'
  },
  {
    number: '200M',
    title: 'Lượt theo dõi'
  }
]

  focusBtn(arg0: boolean) {
    this.focusB = arg0;
  }
  ngOnInit(): void {
    for (let i = 0; i < 30; i++) {
      this.star.push(this.genStyle());
    }
  }
  genStyle() {
    const rd = this.randomSize() + 'px';
    const rdTop = this.randomPercent(5, 30) + '%';
    const rdLeft = this.randomPercent(10, 80) + '%';
    const anima =
      this.randomPercent(100, 200) + 's,' + this.randomPercent(4, 8) + 's';
    return `top:${rdTop}; left:${rdLeft}; width:${rd}; height:${rd}; animation-duration:${anima}`;
  }
  changePage(
    _t14:
      | { title: string; selected: boolean }
      | { title: string; selected?: undefined }
  ) {
    this.menu.forEach((menu) => (menu.selected = false));
    _t14.selected = true;
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  focusTitle(value: boolean) {
    this.isCollapsed = value;
  }

  randomSize() {
    return Math.floor(Math.random() * 13) + 18;
  }

  randomPosition() {
    return Math.floor(Math.random() * 30) + 10;
  }

  randomPercent(from: number, space: number) {
    return Math.floor(Math.random() * space) + from;
  }
}
