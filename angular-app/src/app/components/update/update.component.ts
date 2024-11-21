import { CommonModule } from '@angular/common';
import { CommonServiceService } from './../../services/common-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule, NzInputModule, NzButtonModule, NzGridModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit{
log() {
  console.log(this.input)
  if(this.input && String(this.input).trim() == this.pass){
    localStorage.setItem('pass', this.pass)
    this.isLog = true;
  }
}

  pass:string = '12341234'
  isLog:boolean
  input: string = ''
home() {
this.router.navigateByUrl("/")
}
save() {
  this.common.storeRecipes(this.id, this.data)

}


change(url:string) {
  this.router.navigateByUrl(url)
}

  id
  data:any

  constructor(private route: ActivatedRoute, private common: CommonServiceService, private router:Router) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    if(localStorage.getItem('pass') && localStorage.getItem('pass') == this.pass) {
      this.isLog = true;
    } else {
      this.isLog = false;
    }
  }
  ngOnInit(): void {
  }

}
