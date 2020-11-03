import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../services/registration.service'
@Component({
  selector: 'app-ecat',
  templateUrl: './ecat.component.html',
  styleUrls: ['./ecat.component.css']
})
export class EcatComponent implements OnInit {

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
    this.service.checkLogin();
  }

}
