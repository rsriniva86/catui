import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginValid: boolean;
  username : string ="";
  password : string ="";

  expectedUserName ="admin";
  expectedPassword ="password";

  constructor() {
    this.isLoginValid=true;
  }

  ngOnInit(): void {
  }

  login():void{
    if(this.username.trim() === this.expectedUserName &&
        this.password.trim() === this.expectedPassword){          
          this.isLoginValid=true;                    
      }else{
          this.isLoginValid=false;
      }
  }

}
