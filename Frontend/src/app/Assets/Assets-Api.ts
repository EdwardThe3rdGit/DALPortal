import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {from} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get<any[]>(`http://localhost:3002/get_assets`);
    //return from (fetch('http://localhost:3001/get_assets'));
  }
}
