import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-admintask',
  templateUrl: './admintask.component.html',
  styleUrls: ['./admintask.component.css']
})
export class AdmintaskComponent implements OnInit {
  task:any;
  id:any;
  constructor(private rs:AppService,public router:ActivatedRoute, private rt:Router) {
    this.router.params.subscribe(params=>{
      this.id=params.id;
    })
    console.log(this.id);
   }
  
  ngOnInit():void {
    this.rs.eachtask(this.id).subscribe
    (
      (response)=>
      {
        console.log("for one",response)
        this.task = response;
      }
    ),
    (error)=>console.log(error);
  }
  approve(id:any){
    this.rs.approve(id).subscribe((res)=>{
      console.log(res);
      alert("The task has been updated to Completed");
      this.rt.navigate(['/eachintern']);
    })
  }  
  
  disapprove(id:any){
    this.rs.disapprove(id).subscribe((res)=>{
      console.log(res);
      alert("The task has been updated to Incompleted");
      this.rt.navigate(['/eachintern']);
    })
  }  

  }


