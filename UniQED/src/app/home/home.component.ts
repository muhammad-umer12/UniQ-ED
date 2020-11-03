import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    
  }
  signin;
  ngOnInit(): void {
    this.chck()
  }
   

 

  reload(){
    window.location.reload();
  }
  
  chck(){
    if(localStorage.getItem('session-id'))
    {
        this.signin=false
    }
    else
    {
          this.signin=true
    }
  }

}
