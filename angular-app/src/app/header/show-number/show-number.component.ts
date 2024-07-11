import { Component } from '@angular/core';
import { CountUpDirective } from '../../pipe/count-up.directive';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-show-number',
  standalone: true,
  imports: [CountUpDirective, NzGridModule],
  templateUrl: './show-number.component.html',
  styleUrl: './show-number.component.css'
})
export class ShowNumberComponent {


  viewInfo:any = [{
    number: 100000000,
    title: 'Lượt xem'
  },
  {
    number: '4.75+',
    title: 'Đánh giá cao'
  },
  {
    number: '700',
    title: 'Dự án hoàn thiện'
  },
  {
    number: 200000000,
    title: 'Lượt theo dõi'
  }
]

}
