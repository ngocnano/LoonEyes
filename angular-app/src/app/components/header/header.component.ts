import { ScrollService } from './../../services/scroll-service';
import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BackgroudComponent } from './backgroud/backgroud.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ShowNumberComponent } from './show-number/show-number.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { MenuComponent } from '../menu/menu.component';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    BackgroudComponent,
    NzMenuModule,
    NzToolTipModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
    ShowNumberComponent,
    NzPopoverModule,
    MenuComponent,
    NzModalModule,
    NzAffixModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  changeProject() {
    this.router.navigateByUrl('/contact');
  }
  constructor(
    private modal: NzModalService,
    private commonServiceService: CommonServiceService,
    private router: Router,
    private scrollService: ScrollService
  ) {
    commonServiceService.menu.subscribe(item => {
      this.menu = item;
    });
  }

  focusB = false;

  menu:any;
  star: string[] = [];

  isCollapsed = true;
  visible: any;

  focusBtn(arg0: boolean) {
    this.focusB = arg0;
  }
  ngOnInit(): void {
    for (let i = 0; i < 50; i++) {
      this.star.push(this.genStyle());
    }
    this.commonServiceService.menuChange.subscribe((value) => {
      if (value) {
        this.menu.forEach((menu:any) => {
          menu.selected = value === menu.selector;
        });
      }
    });
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
    _t14:any
  ) {
    this.menu.forEach((menu:any) => (menu.selected = false));
    _t14.selected = true;
    this.scrollService.scrollToElementById(_t14.selector)
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

  clickMe(): void {
    this.visible = false;
  }

  createMenu() {
    // this.modal.create({
    //   nzTitle:
    //     "    <ng-template #tplTitle> <img class='img_menu' src='/assest/image/logo.png'></ng-template>",
    //   nzWidth: '1440px',
    //   nzContent: MenuComponent,
    //   nzFooter: null,
    //   nzMaskClosable: false,
    //   nzClosable: true,
    //   nzWrapClassName: 'w100 h100 menu',
    //   nzData: {
    //     menu: this.menu,
    //   },
    // });
    this.commonServiceService.open();
  }
}
