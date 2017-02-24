import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

  getHeroes() {
    return this.http.get('app/heroes.json')
      .map((response: Response) => response.json());
    // return  [
    //   { 'id': 11, 'name': 'Mongui'},
    //   { 'id': 12, 'name': 'Coco'},
    // ]
  }
  

  constructor(private http: Http) { }

}