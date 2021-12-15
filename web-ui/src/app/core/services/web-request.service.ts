import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  readonly ROOT_URL;
  readonly BaseUrlV1 = '/api/v1';

  constructor(private http: HttpClient) {
    this.ROOT_URL = environment.api + this.BaseUrlV1;
  }

  get(uri: string): Observable<any> {
    return this.http.get(this.ROOT_URL + '/' + uri);
  }

  post(uri: string, payload: Object): Observable<any> {
    return this.http.post(this.ROOT_URL + '/' + uri, payload);
  }

  patch(uri: string, payload: Object): Observable<any> {
    return this.http.patch(this.ROOT_URL + '/' + uri, payload);
  }

  delete(uri: string): Observable<any> {
    return this.http.delete(this.ROOT_URL + '/' + uri);
  }
}
