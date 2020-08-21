import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import * as EmailValidator from 'email-validator';
export class User {
  public regno: any;
  public username: any;
  public password: any;
  public options:any;
  public email: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerUserData = new User();
  constructor(private service:AppService,public router:Router) { }
  
  ngOnInit() {
  }
  registerUser(){
    this.service.signup(this.registerUserData)
    .subscribe(
      (res:any) =>{
        EmailValidator.validate(this.registerUserData.email)
        window.localStorage.setItem('token',res.token)
        window.localStorage.setItem('un', JSON.stringify(res.user.username))
        window.localStorage.setItem('ue', JSON.stringify(res.user.email))
        window.localStorage.setItem('ureg', JSON.stringify(res.user.regno))
        window.localStorage.setItem('uopt', JSON.stringify(res.user.options))
        alert("SIGNUP WAS SUCCESSFULL !!!")
        this.router.navigate(['/dashboard',{username:res.user.username}])
      },
      (err)=>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 400){
            console.log(err)
            alert(err.error);
          }
        }
      }
    )
  }
}

/*
this.service.signup(data).subscribe((result)=>{
      if(result)
      {
        this.router.navigate(['/login']);
      }
      else{
        console.log("Wrong Credentials");
        this.router.navigate(['/signup']);
      }
    })
    */