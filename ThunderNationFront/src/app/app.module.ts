import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';

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
    MatSidenavModule,

    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
