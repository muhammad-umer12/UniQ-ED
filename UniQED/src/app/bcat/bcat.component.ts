import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../services/registration.service'
@Component({
  selector: 'app-bcat',
  templateUrl: './bcat.component.html',
  styleUrls: ['./bcat.component.css']
})
export class BcatComponent implements OnInit {

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
    this.service.checkLogin();
  }

}
