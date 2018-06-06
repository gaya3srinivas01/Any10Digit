import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { IAcronym } from './acronym.model';

@Injectable()
export class DataService {

  private _acronymUrl = 'http://unacronyms.herokuapp.com/acronyms';

  constructor(private _http: HttpClient) { }

  getAcronyms(): any {
    return this._http.get<IAcronym[]>(this._acronymUrl);
  }
}
