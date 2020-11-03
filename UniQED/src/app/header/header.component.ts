import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
    logout;
    signIn;
  ngOnInit(): void {
    this.checkAdmin()

    this.logout=false;
    this.signIn=true;
  
        if(localStorage.getItem('session-id')){
            this.logout=true;
            this.signIn=false
        }
        else{
          this.logout=false;
          this.signIn=true;
        }
  
  }
   hide;
  checkAdmin()
  {
    let a = window.location.pathname;
    if(a.includes('Admin') || a.includes('Dashboard'))
    {
        this.hide=true
    }
    else{
      this.hide=false;
    }
  }


  logoutt()
  {
      localStorage.removeItem('session-id');
      localStorage.removeItem('uId');
      this.signIn=true;
      
  }

 


}
