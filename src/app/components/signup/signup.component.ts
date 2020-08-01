import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerUserData = {}
  constructor(private service:AppService,public router:Router) { }
  
  ngOnInit() {
  }
  registerUser(){
    this.service.signup(this.registerUserData)
    .subscribe(
      (res:any) =>{
        window.localStorage.setItem('token',res.token)
        window.localStorage.setItem('un', JSON.stringify(res.user.username))
        window.localStorage.setItem('ue', JSON.stringify(res.user.email))
        window.localStorage.setItem('ureg', JSON.stringify(res.user.regno))
        window.localStorage.setItem('uopt', JSON.stringify(res.user.options))
        this.router.navigate(['/dashboard'])
      },
      (err)=>console.log(err)
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