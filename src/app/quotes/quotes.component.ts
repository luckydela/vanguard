import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

 
  userdata;
  quotes:any = [];
  color:any=''
  status;//declared a status value which wasnt part of the codes
  searchdata;

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'))
     this.service.getquote(this.userdata.email).subscribe(data=>{
       this.quotes = data;
       this.searchdata = this.quotes;

   })
  }

  approveordecline(quote,status){
    this.service.quoteprove(quote,status).subscribe(data => {
      var index = this.quotes.findIndex(x => x.quote_id == quote.quote_id);
      this.quotes[index].status = status
      if(data['responseCode'] === '000'){
        swal.fire("Status","Activated Successfully", "success");
        this.status = 'success';

      } else {
        swal.fire("Status","Is Declined ", "success");
        this.status = 'danger'
      }
    })
  }


  

  search (query: string){
    this.searchdata = (query) ?this.quotes.filter( data => data.quote_id.toLowerCase().includes(query.toLowerCase()) || data.email.toLowerCase().includes(query.toLowerCase()) || data.status.toUpperCase().includes(query.toUpperCase())) : this.quotes;
  }
}
