import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit, OnDestroy {
  uname: Object;
  users:Object;
  uemail:Object;
  uopt:Object;
  ureg:Object;
  constructor(private service:AppService,public router:Router) { }
  ngOnInit():void {
    this.uname = this.service.getuserun()
    this.uemail = this.service.getuserue()
    this.uopt = this.service.getuseruopt()
    this.ureg = this.service.getuserureg()
  }
  dash(){
    this.router.navigate(['/dashboard/:username',{username:this.uname}])
  }
  ngOnDestroy() {

  }

}