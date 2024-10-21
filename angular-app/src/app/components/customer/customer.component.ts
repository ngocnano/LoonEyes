import { NzGridModule } from 'ng-zorro-antd/grid';
import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { TranslateModule } from '@ngx-translate/core';
import { CommonServiceService } from '../../services/common-service.service';
import { AppGoogleMapsModule } from "../../shared/google-maps/google-maps.module";
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NzGridModule, NzCardModule, NzAvatarModule, TranslateModule, NgTemplateOutlet],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

  cus = [];
  constructor(private common: CommonServiceService){
    this.common.cus.subscribe(cus => {
      this.cus = cus;
    })
  }

}
