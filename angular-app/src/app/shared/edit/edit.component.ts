import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonServiceService } from '../../services/common-service.service';
import { ImageControlComponent } from '../image-control/image-control.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, NzInputModule, FormsModule, NzSelectModule, ImageControlComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  height = signal(250);
  width = signal(250);
  lang = ['vi', 'en', 'cn', 'jp']
  type:string = ''
  obj:any
  key:string = ''
  contentType: "project" | 'new' = 'project'
  content:any = {
    vi:  {},
    en: {},
    cn: {},
    jp: {}
  }
  size: number = 24

  constructor(private common:CommonServiceService) {

  }

  setValue(){
    console.log(this.obj)
    const baseKey = '#' + this.contentType + '#' + this.obj.id;
    this.lang.forEach(lang => {
      this.content[lang] = this.common.mapContent.get(lang+baseKey)
    })
  }

  changeText($event: any,arg1: any) {

  }
  imageReady(imageUrl: string) {
    console.log('Firebase Uploaded Image: ', imageUrl);
  }

}
