import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CountUpDirective } from '../../../pipe/count-up.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-show-number',
  standalone: true,
  imports: [CountUpDirective, NzGridModule, TranslateModule],
  templateUrl: './show-number.component.html',
  styleUrl: './show-number.component.css'
})
export class ShowNumberComponent {


  viewInfo:any = [{
    number: 100000000,
    title: 'count.view'
  },
  {
    number: '4.75+',
    title: 'count.app'
  },
  {
    number: '700',
    title: 'count.project'
  },
  {
    number: 200000000,
    title: 'count.follow'
  }
]

}
