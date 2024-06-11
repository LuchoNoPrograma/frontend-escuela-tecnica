import { Injectable } from '@angular/core';
import {environment} from "../../../environment/environment";
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

}
