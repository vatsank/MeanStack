import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {


  result: any;

  constructor(private _http: Http) { }

  getBooks() {
    return this._http.get('/api/getBooks')
      .map(result => this.result = result.json().data);
  }

}


