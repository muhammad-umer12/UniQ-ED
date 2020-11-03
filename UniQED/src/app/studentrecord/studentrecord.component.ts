import { Component, OnInit } from '@angular/core';
import {LogService} from '../services/log.service'
@Component({
  selector: 'app-studentrecord',
  templateUrl: './studentrecord.component.html',
  styleUrls: ['./studentrecord.component.css']
})
export class StudentrecordComponent implements OnInit {
 term;
  constructor(private logservice: LogService) { }
  borrowerData 
  ngOnInit(): void {
    this.getRecord()
  }

  getRecord()
    {
      this.logservice.getStudentRecord()
      .subscribe((data)=>{
        console.log(data);
        this.borrowerData=data;
      })
    }
  


  

}
