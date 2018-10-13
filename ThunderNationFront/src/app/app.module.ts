import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidenavComponent } from './support/sidenav/sidenav.component';
import { LineChartComponent } from './support/line-chart/line-chart.component';
import { BarChartComponent } from './support/bar-chart/bar-chart.component';
import { PieChartComponent } from './support/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//HI
