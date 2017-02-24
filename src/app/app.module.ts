import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroService } from './heroes/hero.service';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpModule ],
  declarations: [ 
    AppComponent,
    HeroesComponent,
    HeroComponent,
     ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService ]
})
export class AppModule { }
