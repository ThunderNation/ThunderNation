import { Component, OnInit } from '@angular/core';
import { ViewRef } from '@angular/core/src/render3/view_ref';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageSources = ['../../../../assets/slider-images/img1.jpg',
                  '../../../../assets/slider-images/img2.jpg']

  viewLogin: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleLogin(){
    this.viewLogin = !this.viewLogin;
    console.log(this.viewLogin);
  }

}
