import { Component, OnInit } from '@angular/core';
import { UserDataService }  from './../../../services/user-data.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private CONTINENTS = ['North America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia']

  private name = '';
  private username= '';
  private password = '';
  private password2 = '';
  private email = '';

  private continent = '';
  private zipcode = '';

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