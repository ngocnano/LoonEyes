import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonServiceService } from '../../services/common-service.service';
import { ImageControlComponent } from '../image-control/image-control.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, NzInputModule, FormsModule, NzSelectModule, ImageControlComponent, NzGridModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
changeSize($event: any) {
  this.obj.nzLg = $event;
  this.obj.nzMd = $event;
}
  height = signal(250);
  width = signal(250);
  lang = ['vi', 'en', 'cn', 'jp']
  type:string = ''
  obj:any
  keyType:string = ''
  key:string = ''
  keyChild: string | undefined = ''
  contentType: "project" | 'new' = 'project'
  content:any = {
    vi:  {},
    en: {},
    cn: {},
    jp: {}
  }
  url = signal<string>('')
  size: number = 24
  types = [
    {key : 'Văn bản', value : 'text'},
    {key : 'Ảnh', value : 'img'},
    {key : 'Video', value : 'video'},
  ]

  constructor(private common:CommonServiceService) {

  }

  setValue(){
    if(this.contentType === 'new'){
      this.types.push( {key : 'Tiêu đề', value : 'title'})
    }
    console.log(this.obj)
    this.size = this.obj.nzLg
    const baseKey = '#' + this.contentType + '#' + (this.keyChild ? this.keyChild : this.obj.id);
    console.log(baseKey)
    this.lang.forEach(lang => {
      this.content[lang] = this.common.mapContent.get(lang+baseKey)
    })
    if(this.type === 'img' || this.type === 'video') {
      this.url.set(this.obj[this.key])
    }
  }

  changeTextType($event: any) {
    this.type = $event
      this.lang.forEach(lang => {
        this.content[lang][this.keyType] =  $event
      })
  }
  imageReady(imageUrl: string) {
    console.log('Firebase Uploaded Image: ', imageUrl);
    if(this.type === 'img' || this.type === 'video') {
      this.lang.forEach(lang => {
        this.content[lang][this.key] =  imageUrl
      })

      console.log('Firebase Uploaded Image: ', this.content);
      console.log('Firebase Uploaded Image: ', this.common.content);
    }
  }

}
