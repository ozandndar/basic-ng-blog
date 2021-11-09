import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class BlogPostService {

    constructor(private http: HttpClient) { }

    getSingleBlog(id: string) {
        const headers = new HttpHeaders()
            .append('app-id', '612bccf363c17c993aa43041');

        return this.http.get(`https://dummyapi.io/data/v1/post/${id}`, { headers })
    }

}
