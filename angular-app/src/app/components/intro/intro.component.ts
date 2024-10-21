import { CommonServiceService } from './../../services/common-service.service';
import { AfterViewInit, Component } from '@angular/core';
import { YtPlayerComponent } from '../../shared/yt-player/yt-player.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LogoComponent } from '../logo/logo.component';
import { OurTeamComponent } from '../our-team/our-team.component';
import { StartComponent } from '../start/start.component';
import { CustomerComponent } from '../customer/customer.component';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { delay } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [
    YtPlayerComponent,
    NzGridModule,
    NzFlexModule,
    NzIconModule,
    LogoComponent,
    OurTeamComponent,
    StartComponent,
    CustomerComponent,
    NzAffixModule,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent implements AfterViewInit{


  ngAfterViewInit(): void {
    const id = this.route.snapshot.params['id'];
    if(id){
      setTimeout(() => {
        this.scroll(id);
      }, 500)
    }
  }

  scroll(id:string) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    console.log(el)
    el?.scrollIntoView({behavior: 'smooth'});
  }



  changeToContact() {
    this.router.navigateByUrl('/contact');
  }
  openMenu() {
    this.common.open();
  }
  changeTo() {
    this.router.navigateByUrl('/');
  }
  intro: any;
  constructor(private common: CommonServiceService, private router: Router, private route:ActivatedRoute,
    private translate:TranslateService, private title:Title
  ) {
     this.common.intro.subscribe(data => {
      this.intro = data
    });

    translate.stream('title.content').subscribe(item => {
      title.setTitle(this.translate.instant('title.ab') + item)
    })
  }

  id = 'V462IsOV3js';
  playerVars = {
    cc_lang_pref: 'en',
  };
  version = '...';
}
