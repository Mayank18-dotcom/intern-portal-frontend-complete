import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  constructor(private service:AppService,public router:Router,private _location: Location) { }
  onSubmit(data)
  {
    this.service.addingtask(data).subscribe((result)=>{
      console.warn(result);
      this._location.back();
    })
  }
  loggout()
  {
    localStorage.clear();
    this.router.navigate(['/adminlogin'])
  }
  dash()
  {
    this._location.back();
  }
  ngOnInit() {
  }

}
