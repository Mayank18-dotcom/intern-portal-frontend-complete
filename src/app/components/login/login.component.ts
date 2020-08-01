import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
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
  ngOnInit() {
  }

}

/*
this.service.login(data).subscribe((result)=>{
  if(result){
    this.router.navigate(['/dashboard']);
  }
  else{
    console.log("Wrong Credentials");
    this.router.navigate(['/login']);
  }
})*/