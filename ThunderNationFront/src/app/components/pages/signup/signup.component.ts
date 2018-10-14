import { Component, OnInit } from '@angular/core';
import { UserDataService }  from './../../../services/user-data.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public CONTINENTS = ['North America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia']

  public name = '';
  public username= '';
  public password = '';
  public password2 = '';
  public email = '';

  public continent = '';
  public zipcode = '';

  constructor(private userService: UserDataService, private _router: Router) { }

  ngOnInit() {
  }

  signUp() {
    this.userService.createAccount(this.username, this.continent, this.email, this.zipcode, this.name, this.password).subscribe(
      (response) => {
        console.log(response);
        console.log("Account created successfully!")
      })
  }
      

}