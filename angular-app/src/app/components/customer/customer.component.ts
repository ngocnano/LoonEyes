import { NzGridModule } from 'ng-zorro-antd/grid';
import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NzGridModule, NzCardModule, NzAvatarModule, TranslateModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

}
