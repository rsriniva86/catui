import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginValid: boolean;
  isLoggedIn:boolean;
  username : string ="";
  password : string ="";
  
  expectedUserName ="admin";
  expectedPassword ="password";

  
  constructor(private router:Router, private authService:AuthService) {
    this.isLoginValid=true;
    this.isLoggedIn=false;    
  }

  ngOnInit(): void {
  }

  login():void{
    if(this.username.trim() === this.expectedUserName &&
        this.password.trim() === this.expectedPassword){          
          this.isLoginValid=true;   
          this.isLoggedIn=true;   
          this.authService.setLoggedIn(this.isLoggedIn);
          this.router.navigate(['cat-menu']);              
      }else{
          this.isLoginValid=false;
          this.isLoggedIn=false;   
          this.authService.setLoggedIn(this.isLoggedIn);
      }
  }

}
