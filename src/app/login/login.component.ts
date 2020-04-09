import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor( private appcomponent: AppComponent) { 
    
  }
  apy:string = "hepl"; 
  appTitle:string = this.appcomponent.title;
  ngOnInit() {
  }
Message:string = "Please Login ";

  // tryRegister(value){
  //   this.authService.doRegister(value)
  //   .then(res => {
  //     console.log(res);
  //     // this.errorMessage = "";
  //     // this.successMessage = "Your account has been created";
  //   }, err => {
  //     console.log(err);
  //     this.Message = err.message;
  //     this.Message = "Successful login";
  //   })
  // }


}
