import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommonServiceService } from './../../services/common-service.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NzLayoutModule, NzMenuModule, NzListModule, NzRadioModule, FormsModule, NzIconModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  radioValue:any
  curUrl =''

  constructor(private  commonServiceService: CommonServiceService, private router:Router, private route: ActivatedRoute){
    commonServiceService.menu.subscribe(item => {
      this.menu = item;
    });
  }

  ngOnInit(): void {
    this.curUrl = this.router.url
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe((event:any) => {
          this.curUrl = event.urlAfterRedirects;
      });
  }

  @Input() menu:any = [];
  changePage(_t16: any) {
    this.router.navigateByUrl(_t16.url).then(() => this.commonServiceService.close())
  }


}
