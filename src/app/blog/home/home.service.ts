import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  getAllBlogs(): Observable<any> {
    const headers = new HttpHeaders()
      .append('app-id', '612bccf363c17c993aa43041');

    return this.http.get(`https://dummyapi.io/data/v1/post`, { headers })
  }

}
