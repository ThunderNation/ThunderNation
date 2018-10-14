import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators'
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

    return this.http.post('https://emp-dev-api.duke-energy.com/', {
      headers: header
    })
    .map(response => response.json())
    .catch(error => Observable.throw(error));
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
