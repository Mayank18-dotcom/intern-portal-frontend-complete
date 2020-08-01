import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-eachintern',
  templateUrl: './eachintern.component.html',
  styleUrls: ['./eachintern.component.css']
})
export class EachinternComponent implements OnInit {
  users1:any;
  username:any;
  uu:any;
  U:any;
  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router) { 
    this.router.params.subscribe(params=>{
      this.username=params.username;
      this.U=params.id;
    })
  }
  ngOnInit():void {
    this.service.eachintern(this.username).subscribe(data=>{
      this.users1 = data;
      console.log(this.users1);
    })
  }
  eacht(uu){
    console.log(uu._id);
    this.rt.navigate(['/admintask',{id:uu._id}])
  }
  ngOnDestroy() {

  }

}