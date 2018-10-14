
import { NgModule } from '@angular/core';

// Material Stuff
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';

import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  imports: [
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatCardModule,
],
  exports: [
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatBadgeModule,
  ],
})
export class MaterialModule { }
