import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from "./components/footer/footer.component";
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonServiceService } from './services/common-service.service';
import { MenuComponent } from "./components/menu/menu.component";
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent, NzDrawerModule, NzMenuModule, MenuComponent, NzIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  constructor(private commonServiceService:CommonServiceService){
  }
  ngOnInit(): void {
    this.commonServiceService.changeMenuVisible.subscribe(item => {
      this.visible = item
    })
  }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.commonServiceService.visible = false;
  }
}
