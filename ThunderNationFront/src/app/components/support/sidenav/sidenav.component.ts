/**
 * Side Navigation
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

}




// REPONSIVE

// import {MediaMatcher} from '@angular/cdk/layout';
// import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

// /** @title Responsive sidenav */
// @Component({
//   selector: 'app-sidenav',
//   templateUrl: './sidenav.component.html',
//   styleUrls: ['./sidenav.component.css']
// })
// export class SidenavComponent implements OnDestroy {
//   mobileQuery: MediaQueryList;

//   fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

//   private _mobileQueryListener: () => void;

//   constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
//     this.mobileQuery = media.matchMedia('(max-width: 600px)');
//     this._mobileQueryListener = () => changeDetectorRef.detectChanges();
//     this.mobileQuery.addListener(this._mobileQueryListener);
//   }

//   ngOnDestroy(): void {
//     this.mobileQuery.removeListener(this._mobileQueryListener);
//   }

// }
