import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  
  logout(){
    if(localStorage.getItem('admin-session-id'))
    {
      localStorage.removeItem('admin-session-id')
      localStorage.removeItem('uId')
      
      this.router.navigateByUrl('/Admin')
    }
    else{
      //sessionStorage.removeItem('session-id')
    
    }
  }

}
