import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SlideshowModule } from 'ng-simple-slideshow';

// Main Component
import { AppComponent } from './app.component';

// Page Components
import { HomeComponent } from './components/pages/home/home.component';

// Support Components
import { SidenavComponent } from './components/support/sidenav/sidenav.component';
import { LineChartComponent } from './components/support/line-chart/line-chart.component';
import { BarChartComponent } from './components/support/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/support/pie-chart/pie-chart.component';


import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },

  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    BrowserAnimationsModule,

    MDBBootstrapModule.forRoot(),
    MaterialModule,
    SlideshowModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
