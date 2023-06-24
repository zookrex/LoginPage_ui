import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  ngOnInit(): void {
  }
  title = 'login';
  email:string ="";
  password:string="";

  constructor (private loginService : LoginServiceService,
    private router: Router){}

  clearFields(){
    this.email=''
    this.password=''
  }

  signup(){
    this.loginService.register(this.email,this.password)
    .subscribe(
      (res) => {
        console.log("in signup comp", res);
        this.router.navigate(['/register']);
      },
      (error) => {
        console.log("Some error has occurred",error);
      }
    );}

  login(){
    this.loginService.login(this.email,this.password)
    .subscribe((res)=>{
      console.log("in login comp", res);
      this.router.navigate(['/dashboard']);
    },
    (error)=>{
      
    console.log("Some error has occured",error)});
    
  }

}
