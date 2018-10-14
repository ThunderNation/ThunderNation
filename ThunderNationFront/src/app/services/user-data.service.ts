import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http : HttpClient) { }

  getData = (url: string) => {

    if(url === '' )
      return of([]);

    return this.http.get<any>(url);
  };

}
