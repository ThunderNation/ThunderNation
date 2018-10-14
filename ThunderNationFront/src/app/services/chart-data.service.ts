import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private http : HttpClient) { }

  getData = (url: string, parameters: HttpParams) => {

    if(url === '' )
      return of([]);

    return this.http.get<any>(url, {params: parameters} );
  };

  login(username, password): Observable<any[]> {
    let header = new Headers();
    header.append('username', username)
    header.append('password', password)

    var body = {
      'username' : username,
      'password' : password
    }
    return this.http.post<any>('https://thundernation-219400.appspot.com/login', body)
  }



  // getData2(url:string, params:any) {
  //   if(url === '' )
  //     return of([]);
  //
  //   return this.httpClient.get(url)
  // }
//asd

}

export class JsonResponse{

  datasets: Data[];
  labels: string[];

  constructor(){};

}

export class Data{
  data: number[];
  label: string;

  constructor(){};
}
