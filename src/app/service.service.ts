import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private _http: HttpClient) {}

  getStudents() {
    // const params = new HttpParams()
    //   .append('groupId', groupId);
    // return this._http.get('api/students', { params });
    return this._http.get('api/students');
  }
  searchIdentity(query) {
    return this._http.post('api/search_identity', query);
  }

}