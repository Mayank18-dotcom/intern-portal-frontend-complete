import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {
  registerAdminData = {}
  constructor(private service:AppService,public router:Router) { }
  
  ngOnInit() {
  }
  registerUser(){
    this.service.signupadmin(this.registerAdminData)
    .subscribe(
      (res:any) =>{
        window.localStorage.setItem('token',res.token),
        this.router.navigate(['/admindash'])
      },
      (err)=>console.log(err)
    )
  }
}
