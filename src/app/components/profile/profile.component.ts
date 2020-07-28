import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import {AppService} from '../../app.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit, OnDestroy {
  users:Object;
  constructor(private service:AppService) { }
  ngOnInit():void {
    this.service.profile().subscribe(data=>{
      this.users = data;
      console.log(this.users);
    })
  }
  ngOnDestroy() {

  }

}