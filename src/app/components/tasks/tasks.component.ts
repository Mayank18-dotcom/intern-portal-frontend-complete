import { Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task:any;
  id:any;
  constructor(private rs:AppService,public router:ActivatedRoute) {
    this.router.params.subscribe(params=>{
      this.id=params.id;
    })
    console.log(this.id);
   }
  
  ngOnInit():void {
    this.rs.taskone(this.id).subscribe
    (
      (response)=>
      {
        console.log("for one",response)
        this.task = response;
      }
    ),
    (error)=>console.log(error);
  }

}
