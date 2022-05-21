import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllStores() : Observable<any> {
    return this.http.get('https://matthewstore.azurewebsites.net/api/Stores');
  }
}

