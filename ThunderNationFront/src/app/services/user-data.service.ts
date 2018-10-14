import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private URL = "https://thundernation-219400.appspot.com"

  constructor(private http : HttpClient) { }

  getData = (url: string) => {

    if(url === '' )
      return of([]);

    return this.http.get<any>(url);
  };

  getUserData(username){
    let url = this.URL + "/profile"

    let header = new HttpHeaders({ 'username': username})
    return this.http.get<any>(url, { headers: header })
  }

  /*

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
  */

}
