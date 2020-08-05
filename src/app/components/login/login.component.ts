import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';

export class User {
  public username: any;
  public password: any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = new User();
  
  yes:any;
  yess:any;
  constructor(private service:AppService,public router:Router) { }
  loginUser () {
    this.service.login(this.loginUserData)
    .subscribe(
      (res:any) => {
        window.localStorage.setItem('token', res.token)
        window.localStorage.setItem('un', JSON.stringify(res.user.username))
        window.localStorage.setItem('ue', JSON.stringify(res.user.email))
        window.localStorage.setItem('ureg', JSON.stringify(res.user.regno))
        window.localStorage.setItem('uopt', JSON.stringify(res.user.options))
        this.router.navigate(['/dashboard',{username:res.user.username}])
      },
      err => console.log(err)
    ) 
  }
  allog(){
    this.yes = this.service.getuserun()
    this.yess = this.service.loggedIn()
    if(this.yess)
    {
      this.router.navigate(['/dashboard',{username:JSON.parse(this.yes)}])
    }
    else{
      alert("You are not loggedIn. Try to loggin again.")
      this.router.navigate(['/login'])
    }
  }
  ngOnInit() {
  }

}
