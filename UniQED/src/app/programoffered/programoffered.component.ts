import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../services/registration.service'
@Component({
  selector: 'app-programoffered',
  templateUrl: './programoffered.component.html',
  styleUrls: ['./programoffered.component.css']
})
export class ProgramofferedComponent implements OnInit {

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
    this.service.checkLogin();
  }

}
