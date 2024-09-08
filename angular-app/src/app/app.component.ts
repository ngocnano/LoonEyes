import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent, NzDrawerModule, NzAffixModule,
    NzMenuModule, MenuComponent, NzIconModule, TranslateModule, NzButtonModule ],
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
  }
  ngOnInit(): void {
    this.translate.addLangs(['en', 'vi']);
    this.translate.setDefaultLang('vi');

    const browserLang:any = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');

    console.log(browserLang);
    this.currentLangnge = this.translate.getLangs().find(item => item !== this.translate.currentLang)

    this.commonServiceService.changeMenuVisible.subscribe(item => {
      this.visible = item
    })
  }

  changeLang() {
    this.translate.use(this.currentLangnge as any).subscribe(item => {
      this.currentLangnge = this.translate.getLangs().find(item => item !== this.translate.currentLang)
    }, err => console.log);

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
