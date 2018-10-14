import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { ChartDataService }  from './../../../services/chart-data.service';

const URL = 'https://thundernation-219400.appspot.com/getChartData2';
const PARAMS = new HttpParams();

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})



export class BarChartComponent implements OnInit {

  constructor(private dataService: ChartDataService) { }

  ngOnInit() {
    this.dataService.getData(URL, PARAMS).subscribe((response) => {
      //console.log(response);
      this.chartDatasets = response.datasets
      this.chartLabels = response.labels;

    });

  }
  public chartType:string = 'bar';

   public chartDatasets:Array<any>; /*= [
       {data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset'},
       {data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset'}
   ]*/

   public chartLabels:Array<any>; // = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

   public chartColors:Array<any> = [
       {
           backgroundColor: 'rgba(19,127,127,0.71)', //blueish
           borderColor: 'rgba(220,220,220,1)',
           borderWidth: 2,
           pointBackgroundColor: 'rgba(220,220,220,1)',
           pointBorderColor: '#fff',
           pointHoverBackgroundColor: '#fff',
           pointHoverBorderColor: 'rgba(220,220,220,1)'
       },

       {
           backgroundColor: 'rgba(250,5,24,0.71)',
           borderColor: 'rgba(151,187,205,1)',
           borderWidth: 2,
           pointBackgroundColor: 'rgba(151,187,205,1)',
           pointBorderColor: '#fff',
           pointHoverBackgroundColor: '#fff',
           pointHoverBorderColor: 'rgba(151,187,205,1)'
       },

       {
           backgroundColor: 'rgba(18,247,24,0.71)',
           borderColor: 'rgba(151,187,205,1)',
           borderWidth: 2,
           pointBackgroundColor: 'rgba(151,187,205,1)',
           pointBorderColor: '#fff',
           pointHoverBackgroundColor: '#fff',
           pointHoverBorderColor: 'rgba(151,187,205,1)'
       },

       {
           backgroundColor: 'rgba(212,71,224,0.71)',
           borderColor: 'rgba(151,187,205,1)',
           borderWidth: 2,
           pointBackgroundColor: 'rgba(151,187,205,1)',
           pointBorderColor: '#fff',
           pointHoverBackgroundColor: '#fff',
           pointHoverBorderColor: 'rgba(151,187,205,1)'
       }

   ];

   public chartOptions:any = {
       responsive: true
   };
   public chartClicked(e: any): void { }
   public chartHovered(e: any): void { }

}
