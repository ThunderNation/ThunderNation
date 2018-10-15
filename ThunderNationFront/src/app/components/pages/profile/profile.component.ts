import { Component, OnInit } from '@angular/core';
//import {HttpParams} from '@angular/common/http';

import { UserDataService }  from './../../../services/user-data.service';

// const URL = 'https://thundernation-219400.appspot.com/profile';
//const PARAMS = new HttpParams();



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   user;

  constructor(private dataService: UserDataService) { }

  ngOnInit() {
    
    //this.dataService.getData(URL).subscribe((response) => {
      //console.log(response);
      //this.chartDatasets = response.datasets;
      //this.chartLabels = response.labels;
    // this.dataService.getData(URL).subscribe((response) => {
    //   console.log(response);
    //   //this.chartDatasets = response.datasets;
    //   //this.chartLabels = response.labels;
    // })

    this.getUserData();
  }

  getUserData(){
    this.dataService.getUserData("testUser").subscribe((response) => {
      console.log("TEEHEE " + JSON.stringify(response))
      this.user = response

    })
    
  }

  /*
  getEmployeeInfo() : void {
    this.employeesService.getEmployees().subscribe((response) => {
      console.log("employee stuff: " + JSON.stringify(response) + "\n" + response)

      const data : any = response
      this.source.load(data)
    })
    */

}
