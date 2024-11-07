import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from "./components/footer/footer.component";
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonServiceService } from './services/common-service.service';
import { MenuComponent } from "./components/menu/menu.component";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { isTemplateRef } from 'ng-zorro-antd/core/util';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent, NzDrawerModule, NzAffixModule, CommonModule,
    NzMenuModule, MenuComponent, NzIconModule, TranslateModule, NzButtonModule, NzDropDownModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  currentLangnge : string | undefined = ''

  constructor(private commonServiceService:CommonServiceService, 
    private common: CommonServiceService,
    private router: Router,
    public translate: TranslateService){
      this.translate.addLangs(['en', 'vi', 'cn', 'jp']);
      this.translate.setDefaultLang('vi');
  
      const browserLang:any = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/en|cn|vi|jp/) ? browserLang : 'en');
      this.currentLangnge = this.translate.getLangs().find(item => item !== this.translate.currentLang)
  }
  ngOnInit(): void {
    this.commonServiceService.changeMenuVisible.subscribe(item => {
      this.visible = item
    })
  }

  changeLang(lang:string) {
    this.translate.use(lang);
  }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.commonServiceService.visible = false;
  }

  openMenu() {
    this.common.open();
  }
  changeTo() {
    this.router.navigateByUrl('/');
  }
}
