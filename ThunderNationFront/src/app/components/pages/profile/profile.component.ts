import { Component, OnInit } from '@angular/core';
//import {HttpParams} from '@angular/common/http';

import { UserDataService }  from './../../../services/user-data.service';

const URL = 'https://thundernation-219400.appspot.com/profile';
//const PARAMS = new HttpParams();

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dataService: UserDataService) { }

  ngOnInit() {
    /*
    this.dataService.getData(URL).subscribe((response) => {
      console.log(response);
      //this.chartDatasets = response.datasets;
      //this.chartLabels = response.labels;
    })
    */
  }

}
