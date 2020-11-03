import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseUri="http://localhost:3000";
  constructor(private http:HttpClient,private router: Router) { }

  
  studentRegistrtion(data){
    //console.log(data);
    return this.http.post(this.baseUri+'/student',data,{observe: 'response'})
    
  }

  userLogin(data)
      
  {  
  
    console.log(data);
    return this.http.post(this.baseUri+'/student/login',data,{observe: 'response'})
  }


  adminLogin(data)
      
  {  
    console.log(data);
    return this.http.post(this.baseUri+'/admin/login',data,{observe: 'response'})
  }


  checkLogin()
  {
    if(!localStorage.getItem('session-id'))
    {
      this.router.navigateByUrl('/Signin')
    }
  }


  checkAdminLogin()
  {
    if(localStorage.getItem('admin-session-id'))
    {
      this.router.navigateByUrl('/Dashboard')
    }
  }
}
