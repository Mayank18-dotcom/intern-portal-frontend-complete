import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service'

@Component({
  selector: 'app-eachintern',
  templateUrl: './eachintern.component.html',
  styleUrls: ['./eachintern.component.css']
})
export class EachinternComponent implements OnInit {
  users1:Object;
  constructor(private service:AppService) { }
  ngOnInit():void {
    this.service.interntask().subscribe(data=>{
      this.users1 = data;
      console.log(this.users1);
    })
  }
  ngOnDestroy() {

  }

}