import { Component } from '@angular/core';
import { Http } from '@angular/http';
// import { HeroService } from './heroes/hero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <app-heroes></app-heroes>
  `,
  // providers: [ HeroService ]
})
export class AppComponent  { name = 'Angular'; }
