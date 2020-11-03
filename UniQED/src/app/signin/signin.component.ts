import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loader
  a=[];
  constructor(private adminService: RegistrationService, private router:Router) { }

  ngOnInit(): void {
    this.loader=false;
    this.mainForm()
    this.chck()
  }
  form;
  email;
  password;
  mainForm()
  {
      this.form = new FormGroup(
        {
          email: new FormControl('', [Validators.required]),
          password: new FormControl('',[Validators.required])
        })
        

  }  
chck(){
  if(localStorage.getItem('session-id'))
  {
      this.router.navigateByUrl('/')
    
   }
}

  get regForm()
  {
    return this.form.controls;
  }

  register(){

  }

  userLogin()
  {

    console.log(this.form);
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

    this.adminService.userLogin(this.form.value)
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

      
        localStorage.setItem('session-id',this.a[0].token);
        localStorage.setItem('uId',this.a[0]._uid);
        


      this.loader=false;
        setTimeout(() => {
          
          window.location.reload()
        }, 2000);
      
        
          Swal.fire({
            title: 'Login Successfull',
            text: 'Welcome to UniQ-ED',
            icon: 'success',
            showConfirmButton: false,
            timer:2000,
            
       
          })
        
      
      }
    },
    (err)=>{
      this.loader=false;
        
      Swal.fire({
        title: 'Opps Something went wrong !',
       
        icon: 'warning',
        showConfirmButton: true,
        timer:2000,
        
   
      })
      console.log(err)
    })
  }
    
  }

}
