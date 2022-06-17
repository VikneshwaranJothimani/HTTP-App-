import { Component ,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg : string;

  isCreate : boolean = false;
 
  constructor(public logSer : LoginService, public router : Router) { 
  }

  ngOnInit(): void {
   
  }

  getFormData(formval : NgForm)
  {
    this.logSer.doValid().subscribe({
      next : (data:any) =>
      {
        for(let x of data)
        {
          if(x.Username == formval.value.Username && x.Password == formval.value.Password)
          {
            this.router.navigateByUrl("/weather");
            localStorage.setItem("loggedUser" , formval.value.Username)
          }
          else{
            this.msg = "Invalid Login";
            this.isCreate = true;
          }
        }
      }
    })

  }

}
