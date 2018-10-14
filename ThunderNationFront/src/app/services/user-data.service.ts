import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';



const GROUPSURL = "https://thundernation-219400.appspot.com/getGroups";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private URL = "https://thundernation-219400.appspot.com"

  constructor(private http : HttpClient) { }

  getData = (url: string, headers: HttpHeaders) => {

    if(url === ''  || headers === null)
      return of([]);

    return this.http.get<any>(url);
  };


  getAllGroups = () => {
    return this.http.get<any>(GROUPSURL);
  }
  getUserData(username){
    let url = this.URL + "/profile"

    let header = new HttpHeaders({ 'username': username})
    return this.http.get<any>(url, { headers: header })
  }

  createAccount(username, country, email, zipcode, name, password){
    let url = this.URL + "/addUser"

    let header = new HttpHeaders({'Content-Type': 'application/json', 'responseType': 'text'})

    var body = {
      "username": username,
      "country": country,
      "email": email,
      "zipcode": zipcode,
      "name": name,
      "password": password
    }

    return this.http.post<any>(url, body, {headers: header});
  }

  /*
  {
	"username": "testUser3",
    "country": "USA",
    "email": "someEmail@gmail.com",
    "zipcode": "110011",
    "name": "Not Tunak",
    "password" : "123123"
}


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
