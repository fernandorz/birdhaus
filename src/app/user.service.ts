import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
  private isUserLoggedIn;
  public username;

  constructor() { 
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(usuario) {
  	this.isUserLoggedIn = true;
    this.username = usuario;
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn;
}

}
