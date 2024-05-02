//esta importancion es importante ya que con esta agregamos el html y css de la carpeta hero
import { Component, OnInit } from '@angular/core'; //esta importacion es una decoradoro que especifica metadatos Angular para un componente.

import { Hero } from '../hero';

//importamos

import {HEROES} from '../mock-heroes';

import {FormsModule} from '@angular/forms';


import {
  /* . . . */
  NgFor,
  NgIf,
  UpperCasePipe,
  /* . . . */
} from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-heroes', //El selector se refiere a los elementos CSS para el componente
  templateUrl: './heroes.component.html', //el templateUrls es la ubicación del archivo plantilla para el componente
  styleUrls: ['./heroes.component.css'], //el styleUrls es la ubicación de los estilos CSS privados del componente.
  imports: [
    FormsModule,
    //aca exportamos el if y el for que son las funciones del
    //angular
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
})


/* primera fase
aca simplemente hacemos una exportacion del hmtl y css del hero

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
*/

export class HeroesComponent {
  /*primera fase 
  en esta parte asignamos un ID y name al hero, refactorizando el tipo heroe inicializando el id y el name y con un nombre de 
  windstorm

  hero: Hero = {
  id: 1,
  name: 'Windstorm'
  };
  
  
  
  */



  /*segunda fase 
    en esta segunda fase como queremos que las variables del hero cambien y no esten staticos le asignamso
  */
  heroes = HEROES;

  selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}

