import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../services/registration.service'
@Component({
  selector: 'app-dashboardmain',
  templateUrl: './dashboardmain.component.html',
  styleUrls: ['./dashboardmain.component.css']
})
export class DashboardmainComponent implements OnInit {

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
    this.service.checkAdminLogin()
  }



}
