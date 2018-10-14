import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ChartDataService }  from './../../../services/chart-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  title = 'UAT Account Selector Tool';
  errorMessage = 'The username or password is incorrect. Please try again.'
  invalidEntry = false;



  constructor(private _backendService: ChartDataService, private _router: Router) { }
  
  ngOnInit() {
    history.pushState(null, null, location.href);
    window.onpopstate = function(event) {
     history.go(1);
    };
  }

  signup(){
    this._router.navigateByUrl('/signup')
  }

  login(){

    this.invalidEntry = false;
    if(this.username.length < 3 || this.password.length < 3){
      this.invalidEntry = true;
      this.password = ""
    }else{
      
      this._backendService.login(this.username, this.password).subscribe(
        response => {

          // alert("Login Succesful");
          this._router.navigateByUrl('/profile')
          // localStorage.setItem("namID", this.username);
          // localStorage.setItem("token", response['access_token'])
          // this._backendService.checkUser(this.username).subscribe(
          //   response =>{
              
          //     if(response['items'] == true){
          //       this._router.navigate(['/home']);
          //     }else{
          //       this.invalidEntry = true;
          //       this.errorMessage = "You do not have access to this application. Contact support."
          //     }
          //   },
          //   error => {
          //     this.errorMessage = "AD systems is currently offline. Please try again later."
          //   }
          // )
          
        },
        error => {
          this.invalidEntry = true;
          this.errorMessage = "The username or password is incorrect. Please try again."
        }
      );
    }
    
  }
}
