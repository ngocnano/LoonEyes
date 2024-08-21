import { CommonServiceService } from './../../services/common-service.service';
import { Component } from '@angular/core';
import { YtPlayerComponent } from '../../shared/yt-player/yt-player.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LogoComponent } from '../logo/logo.component';
import { OurTeamComponent } from '../our-team/our-team.component';
import { StartComponent } from '../start/start.component';
import { CustomerComponent } from '../customer/customer.component';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { Router } from '@angular/router';

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
  ],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent {
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
  constructor(private common: CommonServiceService, private router: Router) {
     this.common.intro.subscribe(data => {
      this.intro = data
    });
  }

  id = 'V462IsOV3js';
  playerVars = {
    cc_lang_pref: 'en',
  };
  version = '...';
}
