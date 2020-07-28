import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service'
@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  users1:Object;
  constructor(private service:AppService) { }
  ngOnInit():void {
    this.service.admindashboard().subscribe(data=>{
      this.users1 = data;
      console.log(this.users1);
    })
  }
  ngOnDestroy() {

  }

}