import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import {ServiceService} from '../service/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usr={
    email:'',
    password:''
  }
  constructor(private spinner: NgxSpinnerService, private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }


  login(){

    var test = JSON.stringify(this.usr)
  
    //console.log("hvhj");
    //console.log(test);


    this.spinner.show();

 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.show();
    }, 8000);
    
    this.service.getLogin(test).subscribe(data => {

      //console.log(data)
         
         if(data['responseCode'] === '000'){
         // alert("Welcome to Starlife Tracker Administrator!!");
          //SweetAlert2Module("Login", "You are Sucessfully logged In", "success");


          swal.fire("Login Sucess","You are Sucessfully logged In", "success");
          //localStorage.setItem('isLoggedInStatus', JSON.stringify({'sts':true}));
          localStorage.setItem('userdata',JSON.stringify(data['profile'][0]));
            //console.log(data);
            
           this.router.navigate(['./fullayout/quotes']);
         
         } 
         else if(data['responseCode']==='W1012'){
          //this.falseAuth = true; 
         // this.loginreturnData = data['returnData'];
                  // alert("Wrong UserEmail Or Password ");
                   swal.fire({ type: 'error',
                   title: 'Oops...',
                   text: 'Wrong User Email and Password!',
                   footer: '<a href>Why do I have this issue?</a>'});


         }
    });  
  }


}
