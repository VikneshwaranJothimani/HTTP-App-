import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public loginSer : LoginService) { }

  ngOnInit(): void {
  }

  // getNewUserData(formval : NgForm)
  // {
  //   this.loginSer.createUser(formval)
  // }

}
