import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UrlService } from "./urls.service";
import { User } from "./../models/user.model";
@Injectable({
  providedIn: "root"
})
export class UserServices {
  constructor(private http: HttpClient, private urls: UrlService) {}

  createUser = (data: User) =>
    this.http.post(`${this.urls.api}/user/create`, data);

  loginUser = (data: User) =>
    this.http.post(`${this.urls.api}/user/login`, data);
}
