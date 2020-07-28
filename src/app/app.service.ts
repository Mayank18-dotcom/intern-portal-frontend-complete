import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { users } from './users';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  url:string="http://localhost:3000";

  constructor(private http:HttpClient) { 
  }
  
  signup(user)
  {
   return this.http.post(this.url+'/user/signup',user);
  }

  login(user)
  {
   return this.http.post(this.url+'/user/login',user);
  }
  profile()
  {
    return this.http.get(`${this.url}/profile`);
  }
  dashboard()
  {
    return this.http.get(this.url+'/user/dashboard');
  }
  taskone(id:any)
  {
    return this.http.get(this.url+'/user/taskone'+"?id="+id);
  }
  getToken()
  {
    return window.localStorage.getItem('token')
  }
  loggedIn()
  {
    return !!window.localStorage.getItem('token')
  }
  /*************************************************************************************************** */
  
  signupadmin(admin)
  {
   return this.http.post(this.url+'/admin/signup',admin);
  }

  loginadmin(admin)
  {
   return this.http.post(this.url+'/admin/login',admin);
  }
  profileadm()
  {
    return this.http.get(`${this.url}/admin/profile`);
  }
  addingtask(data)
  {
    return this.http.post(this.url+'/admin/addtask',data)
  }
  admindashboard()
  {
    return this.http.get(`${this.url}/admin/dashboard`);
  }
  interntask()
  {
    return this.http.get(`${this.url}/admin/dashboard/tasks`);
  }
  eachtask(id:any)
  {
    return this.http.get(this.url+'/admin/dashboard/taskone'+"?id="+id);
  }
  approve(id:any){
    let body={
      id:id
    }
    return this.http.post(this.url+'/admin/dashboard/taskone/complete',body);
  }
  disapprove(id:any){
    let body={
      id:id
    }
    return this.http.post(this.url+'/admin/dashboard/taskone/incomplete',body);
  }
}
