import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {


  
  userdata;
  agents:any = [];
  color:any=''
  searchdata;
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'))
     this.service.getAgents(this.userdata.email).subscribe(data=>{
       this.agents = data;
       this.searchdata = this.agents;
       console.log(data)
   })
  }

  approveordecline(agent,status){
    this.service.managersapprove(agent,status).subscribe(data => {
      var index = this.agents.findIndex(x => x.id == agent.id);
      this.agents[index].status = status
    })
  }


  search (query: string){
    this.searchdata = (query) ?this.agents.filter( data => data.id.toLowerCase().includes(query.toLowerCase()) || data.lastName.toLowerCase().includes(query.toLowerCase()) || data.email.toUpperCase().includes(query.toUpperCase())) : this.agents;
  }
  
}