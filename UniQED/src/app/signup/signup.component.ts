import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {RegistrationService} from '../services/registration.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({

  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: RegistrationService, private router: Router) { }
  loader
  ngOnInit(): void {
    this.loader=false;
    this.mainForm();


  }


     
  
  form : FormGroup;
  mainForm()
  {
      this.form = new FormGroup(
        {
          name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$'),Validators.maxLength(20)]),
          email: new FormControl('',[Validators.required, Validators.email]),
          password : new FormControl('',[Validators.required,Validators.minLength(7)]),
        
          mobileNo : new FormControl('',[Validators.required,Validators.pattern("^[0]{1}[3]{1}[0-9+]{9}$")]),
          board : new FormControl('',[Validators.required,]),
          subject : new FormControl('',[Validators.required])
        }
      );

  }

  get regForm()
  {
    return this.form.controls;
  }

  register()
  {
    this.loader=true;
      console.log(this.form);
      if(this.loader==true){
        Swal.fire({
          title: 'Please Wait',
          allowEscapeKey: false,
          allowOutsideClick: false,
          //background: '#19191a',
          
          showConfirmButton: false,
          onOpen: ()=>{
              Swal.showLoading();
          }})}
          let obj={
            name:this.form.value.name,
            email:this.form.value.email,
            password:this.form.value.password,
            mobileNo:this.form.value.mobileNo,
            subject:this.form.value.subject,
            board:this.form.value.board,
          }


          this.service.studentRegistrtion(obj)
    .subscribe((data)=>
    {

      this.loader=false;
        setTimeout(() => {
          
          this.router.navigateByUrl('/')
        }, 2000);
      
        
          Swal.fire({
            title: 'Registration Successfull',
            icon: 'success',
            showConfirmButton: false,
            timer:2000,
            
       
          })
      
    },
    (err)=>
    {
      if(err.status == 409)
      {  
        this.loader=false;
        
        Swal.fire({
          title: 'Registration Failed !',
          text: err.error.messege,
          icon: 'warning',
          showConfirmButton: true,
          timer:2000,
          
     
        })
        //this.form_error=true;
        //this.err_messege=err.error.messege;
        //console.log(err)
        //console.log(err.error.messege);
      }
      else{
        Swal.fire({
          title: 'Oop Something went wrong !',
          text: err.error.messege,
          icon: 'warning',
          showConfirmButton: true,
          timer:2000,
          
     
        })
      }

    })
    
      

  }

}
