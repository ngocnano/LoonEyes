import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HeaderComponent } from '../header/header.component';
import { LogoComponent } from '../logo/logo.component';
import { ProjectComponent } from '../project/project.component';
import { ServiceComponent } from '../service/service.component';
import { OurTeamComponent } from '../our-team/our-team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, LogoComponent, 
    ServiceComponent, ProjectComponent, OurTeamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
