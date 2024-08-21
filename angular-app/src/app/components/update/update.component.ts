import { CommonModule } from '@angular/common';
import { CommonServiceService } from './../../services/common-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule, NzInputModule, NzButtonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit{
home() {
this.router.navigateByUrl("/")
}
save() {
  this.common.storeRecipes(this.id, this.data)

}

  id
  data:any

  constructor(private route: ActivatedRoute, private common: CommonServiceService, private router:Router) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)

  }
  ngOnInit(): void {
    this.common.fetchData(this.id).subscribe((data:any) => {
      this.data = JSON.stringify(data) as any
    });
  }

}
