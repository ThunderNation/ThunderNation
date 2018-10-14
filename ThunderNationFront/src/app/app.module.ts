import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'

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
import { FormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },

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
    PieChartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule,
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
