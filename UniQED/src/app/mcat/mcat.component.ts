import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../services/registration.service'
@Component({
  selector: 'app-mcat',
  templateUrl: './mcat.component.html',
  styleUrls: ['./mcat.component.css']
})
export class McatComponent implements OnInit {

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
    this.service.checkLogin();
  }

}
