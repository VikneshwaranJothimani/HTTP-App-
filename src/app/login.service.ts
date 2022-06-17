import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(public http : HttpClient, public route : Router) { }

  doValid()
  {
    return this.http.get("assets/data.json")

  }


  get loggedUser()
  {
    return localStorage.getItem("loggedUser")
  }

  isLoggedIn()
  {
    return !!localStorage.getItem("loggedUser")
  }
  deleteUser()
  {
    localStorage.clear();
    this.route.navigateByUrl("")

  }


}
