import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInVariable:boolean;
  constructor() { 
    this.isLoggedInVariable=false;
  }

  public setLoggedIn(isLoggedIn:boolean){
    this.isLoggedInVariable=isLoggedIn;    
  }

  public isLoggedIn():boolean{
    return this.isLoggedInVariable;
  }

}
