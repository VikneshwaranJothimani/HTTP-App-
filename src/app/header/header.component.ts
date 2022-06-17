import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {JokesService} from '../jokes/jokes.service'
import { NewsService } from '../news.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCreate : boolean;

  displayStyle = "none";

  blurbgc : string;

  constructor(public loginSer : LoginService) { 
    this.isCreate = this.loginSer.isLoggedIn();
  }
  
  ngOnInit(): void {}

  openPopUp() 
  {
    this.blurbgc = "blur(3px)"
    this.displayStyle = "block";
  }

  deleteUserData()
  {
    this.loginSer.deleteUser();
    this.displayStyle = "none";
  }
  
  closePopup() 
  {
    this.displayStyle = "none";
  }
}
