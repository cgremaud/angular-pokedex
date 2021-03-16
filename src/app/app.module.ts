import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokedexBackgroundComponent } from './pokedex-background/pokedex-background.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexBackgroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
