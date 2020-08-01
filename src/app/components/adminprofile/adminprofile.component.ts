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
  uname: Object;
  uemail:Object;
  ureg:Object;
  ngOnInit():void {
    this.uname = this.service.getuserun()
    this.uemail = this.service.getuserue()
    this.ureg = this.service.getuserureg()
  }
}
