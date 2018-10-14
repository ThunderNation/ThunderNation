import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';



const GROUPSURL = "https://thundernation-219400.appspot.com/getGroups";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http : HttpClient) { }

  getData = (url: string, headers: HttpHeaders) => {

    if(url === ''  || headers === null)
      return of([]);

    return this.http.get<any>(url);
  };

  getAllGroups = () => {
    return this.http.get<any>(GROUPSURL);
  }

}
