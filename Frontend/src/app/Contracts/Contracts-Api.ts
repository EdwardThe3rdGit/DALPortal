import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetchAssets(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3002/get_assets');
  }

  getContractData(id: string): Observable<any> {
    return this.http.post<any>('http://localhost:3002/get_contract', { id });
  }
}
