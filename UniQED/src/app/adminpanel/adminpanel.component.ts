import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  //class variables 

  nm;
  form : FormGroup;
  loader

  email;
  password;
  //constructer
  constructor(private adminService: RegistrationService, private router:Router) { }

  //decorators
  ngOnInit(): void {
    this.email="empty";
    this.password="empty";
    this.loader=false;
    this.mainForm();
  }

  

  //class methods
  mainForm()
  { console.log(window.location.pathname)
      this.form = new FormGroup(
        {
          email: new FormControl('', [Validators.required]),
          password: new FormControl('',[Validators.required])
        })
        

  }  
  chck(a){
    console.log(a);
  }   
   a =[];
        
   get regForm()
  {
    return this.form.controls;
  }
  userLogin()
  {

    console.log("email"+this.form.value.email);
    if(this.form.value.email=="" && this.form.value.password=="" )
    {
      this.email=true;
      this.password=true
    }
    else if(this.form.value.email=="" && this.form.value.password!="" )
    {
      this.email=true;
      this.password=false;
    }
    else if(this.form.value.password==""  && this.form.value.email!="")
    {
      this.email=false;
      this.password=true;
    }
    else {
    
      this.email=false;
      this.password=false;
    //console.log(this.form)
    this.loader=true
    if(this.loader==true){
    Swal.fire({
      title: 'Please Wait',
      allowEscapeKey: false,
      allowOutsideClick: false,
      
      showConfirmButton: false,
      didOpen: ()=>{
          Swal.showLoading();
      }})}

    this.adminService.adminLogin(this.form.value)
    .subscribe((data)=>{
   
      if(data.body=='User Not found'){
        console.log("invalid email or password");
        this.loader=false;
        
        Swal.fire({
          title: 'Login Failed !',
          text: 'Invalid Email or password',
          icon: 'warning',
          showConfirmButton: true,
          timer:2000,
          
     
        })

      }
      else{
        console.log("login successsful");
        
         this.a.push(data.body.valueOf())
         console.log(this.a[0].token)
         //localStorage.setItem('session-id',this.a[0].token)

      
        localStorage.setItem('admin-session-id',this.a[0].token);
     
        localStorage.setItem('uId',this.a[0]._uid);
        


      this.loader=false;
        setTimeout(() => {
          
          this.router.navigateByUrl('/Dashboard')
        }, 2000);
      
        
          Swal.fire({
            title: 'Login Successfull',
            text: 'Welcome to Know Your life Stock',
            icon: 'success',
            showConfirmButton: false,
            timer:2000,
            
       
          })
        
      
      }
    },
    (err)=>{
      console.log(err)
    })
  }
    
  }
}
