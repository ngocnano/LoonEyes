import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [NzGridModule, NzTypographyModule, NzIconModule, NzFlexModule, TranslateModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent {
  constructor(private router: Router) {}

  changeToProject() {
    this.router.navigateByUrl('/contact');
  }
}
