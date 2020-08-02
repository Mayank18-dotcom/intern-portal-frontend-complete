import { Component, OnInit , ViewEncapsulation, OnDestroy} from '@angular/core';
import {AppService} from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit,OnDestroy {
  users:any
  tasks:Object;
  username:any;
  yes:any;
  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router) { 
    this.router.params.subscribe(params=>{
      this.username=params.username;
    })
  }

  ngOnInit():void {
    this.service.dashboard(this.username).subscribe(data=>{
      this.tasks = data;
      console.log(this.tasks);
    })
  }
  loggout()
  {
    localStorage.clear();
    this.rt.navigate(['/login'])
  }
  dash()
  {
    this.rt.navigate(['/dashboard',{username:JSON.parse(this.yes)}])
  }
  ngOnDestroy() {

  }
}
