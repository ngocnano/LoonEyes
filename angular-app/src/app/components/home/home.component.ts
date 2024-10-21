import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HeaderComponent } from '../header/header.component';
import { LogoComponent } from '../logo/logo.component';
import { ProjectComponent } from '../project/project.component';
import { ServiceComponent } from '../service/service.component';
import { OurTeamComponent } from '../our-team/our-team.component';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { CommonServiceService } from '../../services/common-service.service';
import { StartComponent } from '../start/start.component';
import { CustomerComponent } from '../customer/customer.component';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, LogoComponent, NzBackTopModule, NzAffixModule, TranslateModule,
    ServiceComponent, ProjectComponent, OurTeamComponent, NzAnchorModule, StartComponent, CustomerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{

  constructor(public comon:CommonServiceService,   private route: ActivatedRoute, private translate:TranslateService, private title:Title){
    translate.stream('title.content').subscribe(item => {
      title.setTitle( "looneyesstudio.com - " + this.translate.instant('title.home') + item)
    })
    // title.setTitle(this.translate.stream('title.home') + this.translate.stream('title.content'))
  }

  @ViewChild(HeaderComponent, {static:false}) header!: HeaderComponent;
  active:string = ''


  ngAfterViewInit() {
    console.log(this.translate.stream('count.view'))
    // @ts-ignore
    // window.addEventListener('scroll', this.getValue);
  }


  @HostListener('window:scroll', ['$event']) onScrollEvent($event:any){
    this.getValue()
  } 

  getValue(){
    const sections: any = Array.from(
      document.getElementsByClassName(
        'scrollable'
      ) as HTMLCollectionOf<HTMLElement>
    ).map((section) => [section.id, section.offsetTop]);
    if(!sections.length){
      return;
    }
    let foundIndex = 0;
    sections.forEach((sec:any, index:any) => {
      if (document.scrollingElement?.scrollTop && document.scrollingElement?.scrollTop >= sec[1]) {
        foundIndex = index;
      }
    }); 

    if(sections[foundIndex][0] && sections[foundIndex][0] != this.active){
      this.active = sections[foundIndex][0];
      this.comon.menuChange.next(this.active);
    }
  
  }

}
