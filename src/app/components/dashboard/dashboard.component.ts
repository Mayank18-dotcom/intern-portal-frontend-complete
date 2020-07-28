import { Component, OnInit , ViewEncapsulation, OnDestroy} from '@angular/core';
import {AppService} from '../../app.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit,OnDestroy {
  tasks:Object;
  constructor(private service:AppService) { }

  ngOnInit():void {
    this.service.dashboard().subscribe(data=>{
      this.tasks = data;
      console.log(this.tasks);
    })
  }
  ngOnDestroy() {

  }
}
