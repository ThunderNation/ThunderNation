import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageSources = ['../../../../assets/slider-images/img1.jpg',
                  '../../../../assets/slider-images/img2.jpg']

  constructor() { }

  ngOnInit() {
  }

}
