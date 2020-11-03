import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mainForm()
  }

  
form : FormGroup;
mainForm()
{
    this.form = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$'),Validators.maxLength(20)]), //pattern to take characters and white space
       
        cnic:new FormControl('',Validators.required),
        description:new FormControl('',Validators.required),
        subject:new FormControl('',Validators.required),
        address:new FormControl('',Validators.required),
        mobileNo : new FormControl('',[Validators.required,Validators.pattern("^[0]{1}[3]{1}[0-9+]{9}$")]),
        //qualification: new FormControl('',Validators.required),
  
        city : new FormControl('',[Validators.required]),
  
        imgFile: new FormControl('')

      
      }
    );




}


get regForm()
{
  return this.form.controls;
}
  selectedFiles ;

   uploadFile(fl){
         
     this.selectedFiles = fl.target.files[0];
     //console.log(this.selectedFiles);

   }


   register(){
     
   }

}
