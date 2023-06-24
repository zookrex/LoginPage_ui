import { Component } from '@angular/core';
import { LoginServiceService } from './login-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'login';
  // email:string ="";
  // password:string="";

  // constructor (private loginService : LoginServiceService,
  //   private router: Router){}

  // clearFields(){
  //   this.email=''
  //   this.password=''
  // }

  // signup(){
  //   this.loginService.register(this.email,this.password)
  //   .subscribe(
  //     (res) => {
  //       console.log("in login comp", res);
  //     },
  //     (error) => {
  //       console.log("Some error has occurred",error);
  //     }
  //   );}

  // login(){
  //   this.loginService.login(this.email,this.password)
  //   .subscribe((res)=>{
  //     console.log("in login comp", res);
  //     this.router.navigate(['/dashboard']);
  //   },
  //   (error)=>{
      
  //   console.log("Some error has occured",error)});
    
  // }
}
