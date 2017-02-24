import { HeroService } from './hero.service';
import { NgFor } from '@angular/common/src/directives/ng_for';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { HeroComponent } from './hero.component';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  template: `

    <app-hero [hero]="selectedHero"></app-hero>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        (click)="onSelect(hero)"
        [class.selected]="hero===selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `,
  styles: [`
    .heroes li {
      list-style: none;
      margin-bottom: 5px;
      width: 200px;
    }
    .heroes .badge {
      display: inline-block;
      padding: 1em;
      background-color: #123456;
      color: white;
      line-height: 1em;
      border-radius: 10px;
    }
    .heroes li:hover {
      background: #d34dd2;
      color: white;
      border-radius: 10px;
    }
    .heroes li.selected {
      background: #123456;
      color: white;
      border-radius: 10px;
    }
    .heroes li.selected:hover {
      background: #b23bb3;
      color: #white;
      border-radius: 10px;
    }
  `]

})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() { 
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    

    // this.heroes = this.heroService.getHeroes();
    // this.heroes = [
    //   { 'id': 11, 'name': 'Mongui'},
    //   { 'id': 12, 'name': 'Coco'},
    // ]
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}