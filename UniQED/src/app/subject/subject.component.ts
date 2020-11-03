import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {LogService} from '../services/log.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute, private service: LogService) { }
  data;
  ngOnInit(): void {
    this.data=null;
    this.getCourse()
  }
  
  getCourse()
  {
    this.route.paramMap
    .subscribe((data)=>{
      let id = data.get('id')
      console.log(id)
      

      this.service.getCourse(id)
      .subscribe((veterinary)=>{
        this.data=veterinary
        console.log(this.data)
      },
      (err)=>
      {
        if(err.status== 409)
        {
          this.router.navigateByUrl('/')
        }
        else{
         // this.router.navigateByUrl('/dashboard/Borrower')
        }
      })





    })
  }

}
