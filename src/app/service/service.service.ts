import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  dummy_url: string ="http://localhost:8080/starlife/login";
   Base_Url: any ="http://192.168.2.116:8080";
   live_Url: any= "https://vanguard-api.herokuapp.com";

   isLoggedInStatus:any





   private httpHeaders = new HttpHeaders()
   .set('Content-Type', 'application/json')
   .set('Access-Control-Allow-Origin', '*')

   .set("Acces-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
   .set("Acces-Control-Allow-Headers", "Origin, Content-Type, Cookies");

   private options = {
    headers: this.httpHeaders
  };


  constructor(private http: HttpClient) {
    //console.log("connected Login");


  }




  getLogin(test){
    return this.http.post(this.live_Url+'/vanguard/api/manager_login', test, this.options);
  }


  managersapprove(agent,status){
    agent.status = status;
    return this.http.post(this.live_Url+'/vanguard/api/managers/approve',JSON.stringify({id:agent.id,status:agent.status}), this.options)
  }

  quoteprove(quote, status){
    quote.status = status;
    return this.http.post(this.live_Url+'/vanguard/api/managers/approve_quote',JSON.stringify({quote_id:quote.quote_id,status:quote.status}), this.options)
  }

  getquote(email){
    return this.http.post(this.live_Url+'/vanguard/api/manager/get_quotes',JSON.stringify({email: email}), this.options);
   }


   getAgents(email){
    return this.http.post(this.live_Url+'/vanguard/api/get_agents',JSON.stringify({email: email}), this.options);//agents
   }

   RegisterAsmanager(submit){
     return this.http.post(this.live_Url+'/vanguard/api/managers/add', submit, this.options)
   }


   
 

}
