import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  FI;
  Role;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.FI=null;
    this.Role=null;
    this.mainForm();
  }

  financialInstitution="Financial Institution Name";

  fiNames=[
    { name:'Askari bank' },
    { name:'SAFCO' },
    { name:'NRSP' },
    { name:'HBL' },
]
insurers="Insurers Name";
inNames=[
  { name:'TPL Insurance' },
  { name:'Jublee Insurance' },
  { name:'Adamjee Insurance' }
]
  


  form : FormGroup;

  mainForm()
  {

      this.form = this.fb.group(
        {

          name: ['', [Validators.required, Validators.maxLength(20),Validators.pattern('/^[a-zA-Z]+$/')]],

          email: ['',[Validators.required, Validators.email]],

          password : ['',[Validators.required,Validators.pattern('^(?=.{7,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$')]],

          mobileNo : ['',[Validators.required,Validators.pattern('^[0-9]$')]],

          stakeholder :['',[Validators.required,]],

          stakeholderName : ['',[Validators.required]],

          role : ['',[Validators.required]],

          permissionLevel : ['',[Validators.required]],
        }
      );


  }

  stk_change(a)
  {
        this.FI=a.target.value;
        console.log(this.FI);

  }

  role_change(a){
    this.Role=a.target.value;
    console.log(this.Role)
  }

  register()
{
  console.log(this.form.value);
}
}



