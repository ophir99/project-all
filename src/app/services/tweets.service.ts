import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UrlService } from './urls.service';
@Injectable({
    providedIn: "root"
})
export class TweetsService {
    constructor(private http: HttpClient, private URL: UrlService) {
    }
    postTweet = data => this.http.post(`${this.URL.api}/tweets/new`, data);

    getTweets = () => this.http.get(`${this.URL.api}/tweets/all`);

    updateTweet = (id, data)=> 
                 this.http.put(`${this.URL.api}/tweets/update/${id}`, data)

    deleteTweet =  id => 
                 this.http.delete(`${this.URL.api}/tweets/${id}`)
}
