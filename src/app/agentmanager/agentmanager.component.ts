import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {MyaccountComponent} from '../myaccount/myaccount.component'
import {Router} from '@angular/router';


@Component({
  selector: 'app-agentmanager',
  templateUrl: './agentmanager.component.html',
  styleUrls: ['./agentmanager.component.css']
})
export class AgentmanagerComponent implements OnInit {
  
 userdata;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'))
  }



  logout(){
    
      window.localStorage.clear();
      this.router.navigate(['']);
    
  }

  profile(){
    this.router.navigate(['fullayout/profile']);
  }

  quotechecker(){
    this.router.navigate(['fullayout/quotes'])
  }

  getAgents(){
    this.router.navigate(['fullayout/agentstatus'])
  }

 


}
