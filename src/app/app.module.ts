import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//aca abrimos la ruta relativa para buscar e importar FormsComponent de la biblioteca angular/Forms
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
//aca abrimos la ruta relativa para buscar e importar HeroesComponent
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    //en este punto declaramos la matriz heroesComponent
    
  ],
  imports: [
    BrowserModule,
    //aca agregamos FormsModule a la importancion de NgModule, esta
    //parte es importante ya que esta importacion contiene la lista de modulos externos que necesita la app
    FormsModule,
    HeroesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
