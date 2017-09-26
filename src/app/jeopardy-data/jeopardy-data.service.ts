import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Clue } from '../models/clue';

@Injectable()
export class JeopardyDataService {

  constructor(private http: Http) { }

  getAClue(): Observable<Clue> {
    return this.http
    .get('http://jservice.io/api/random?count=1')
    .map(response => response.json())
    .map(array => array[0])
  }

}
