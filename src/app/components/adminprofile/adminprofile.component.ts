import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service'
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  constructor(private service:AppService) { }
  users:Object;
  ngOnInit():void {
    this.service.profileadm().subscribe(data=>{
      this.users = data;
      console.log(this.users);
    })
  }

}
