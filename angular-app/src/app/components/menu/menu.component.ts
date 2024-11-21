import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommonServiceService } from './../../services/common-service.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_MODAL_DATA, NzModalModule, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { filter } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NzLayoutModule, NzMenuModule, NzListModule, NzRadioModule, FormsModule, NzIconModule,
    NzModalModule,
     TranslateModule, CommonModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {

  changeToAdm() {
    this.router.navigateByUrl('/update').then(() => this.commonServiceService.close())
  }
  radioValue:any
  curUrl =''

  constructor(
    private modal: NzModalService,
    private  commonServiceService: CommonServiceService, private router:Router, private route: ActivatedRoute){
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

  changeTo(url: any, param?: string) {
    this.router.navigate([url, param ? {id: param} : {}]).then(() => this.commonServiceService.close())
  }


  goToLink(url: string){
    window.open(url, "_blank");
}



}
