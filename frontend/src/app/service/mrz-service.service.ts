import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MrzService {

  private url = 'http://localhost:8080/backend/mrzs/';

  constructor(private http: HttpClient) {
  }

  getMrz(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
