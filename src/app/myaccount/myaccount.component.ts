import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {


userdata;

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'))

  }

}
