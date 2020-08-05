import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';

export class Admin {
  public username: any;
  public password: any;
}

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginAdminData = new Admin();
  yes:any;
  yess:any;
  constructor(private service:AppService,public router:Router) { }
  loginAdmin () {
    this.service.loginadmin(this.loginAdminData)
    .subscribe(
      (res:any) => {
        window.localStorage.setItem('token', res.token)
        window.localStorage.setItem('un', JSON.stringify(res.admin.username))
        window.localStorage.setItem('ue', JSON.stringify(res.admin.email))
        window.localStorage.setItem('ureg',(res.admin.regno))
        this.router.navigate(['/admindash',{regno:res.admin.regno}])
      },
      err => console.log(err)
    ) 
  }
  allog(){
    this.yes = this.service.getuserureg()
    this.yess = this.service.loggedIn()
    if(this.yess)
    {
      this.router.navigate(['/admindash',{regno:JSON.parse(this.yes)}])
    }
    else{
      alert("You are not loggedIn. Try to loggin again.")
      this.router.navigate(['/adminlogin'])
    }
  }
  ngOnInit() {
  }

}
