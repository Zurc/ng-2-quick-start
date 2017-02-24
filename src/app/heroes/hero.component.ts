import { Hero } from './hero.model';
import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent{
  @Input() hero: Hero;
}