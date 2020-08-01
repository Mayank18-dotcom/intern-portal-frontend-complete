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
  registerAdmin(){
    this.service.signupadmin(this.registerAdminData)
    .subscribe(
      (res:any) =>{
        window.localStorage.setItem('token',res.token)
        window.localStorage.setItem('un', JSON.stringify(res.admin.username))
        window.localStorage.setItem('ue', JSON.stringify(res.admin.email))
        window.localStorage.setItem('ureg', JSON.stringify(res.admin.regno))
        this.router.navigate(['/admindash'])
      },
      (err)=>console.log(err)
    )
  }
}
