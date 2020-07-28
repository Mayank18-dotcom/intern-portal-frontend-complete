import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  constructor(private service:AppService,public router:Router) { }
  onSubmit(data)
  {
    this.service.addingtask(data).subscribe((result)=>{
      console.warn(result);
      this.router.navigate(['/eachintern']);
    })
  }
  ngOnInit() {
  }

}
