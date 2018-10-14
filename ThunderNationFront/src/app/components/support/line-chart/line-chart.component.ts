import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';

// import { ChartDataService }  from 'app/services/chat-data.service';
 import { ChartDataService }  from './../../../services/chart-data.service';


const URL = 'https://thundernation-219400.appspot.com/getChartData3';
const PARAMS = new HttpParams();
//
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor(private dataService: ChartDataService) {


  }

  ngOnInit() {
    this.dataService.getData(URL, PARAMS).subscribe((response) => {
      //console.log(response);
      this.chartDatasets = response.datasets;
      this.chartLabels = response.labels;

    });
  }

  public chartType:string = 'line';

    public chartDatasets; /*:Array<any> = [
        {data: [650, 590, 800, 810, 560, 550, 400], label: 'My First dataset'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset'}
    ];*/

    public chartLabels; //:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

    public chartColors:Array<any> = [
        {
            backgroundColor: '#FBC02D',
            borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        /*
        {
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
        */
    ];

    public chartOptions:any = {
        responsive: true
    };
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }

}
