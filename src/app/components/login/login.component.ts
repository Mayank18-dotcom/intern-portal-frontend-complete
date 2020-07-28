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
        this.router.navigate(['/dashboard'])
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