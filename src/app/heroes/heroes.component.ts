// Importa los decoradores Component y OnInit desde @angular/core
import { Component, OnInit } from '@angular/core';
// Importa la interfaz Hero desde el archivo 'hero.ts' ubicado en el directorio '../'
import { Hero } from '../hero';
// Importa la constante HEROES desde el archivo 'mock-heroes.ts' ubicado en el directorio '../'
import { HEROES } from '../mock-heroes';
// Importa el módulo FormsModule para trabajar con formularios en el componente
import { FormsModule } from '@angular/forms';
// Importa el servicio HeroService desde el archivo 'hero.service' ubicado en el directorio '../'
import { HeroService } from '../hero.service';
// Importa el servicio MessageService desde el archivo 'message.service' ubicado en el directorio '../'
import { MessageService } from '../message.service';

import {
  /* . . . */
  NgFor,
  NgIf,
  UpperCasePipe,
  /* . . . */
} from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterModule } from '@angular/router';



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

    //aca hay que exportar las exportaciones si el nuevo proyecto tiene stanalone
    HeroDetailComponent,
    RouterModule,
  ],
})


/* FASE 2
aca simplemente hacemos una exportacion del hmtl y css del hero

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
*/

// export class HeroesComponent {
//   /*primera fase 
//   en esta parte asignamos un ID y name al hero, refactorizando el tipo heroe inicializando el id y el name y con un nombre de 
//   windstorm

//   hero: Hero = {
//   id: 1,
//   name: 'Windstorm'
//   };
//   /*segunda fase 
//     en esta segunda fase como queremos que las variables del hero cambien y no esten staticos le asignamos
//     asi que definimos una propiedad de componentes llamada heroes para exponer la matriz de heroes para la union
//   */
//   heroes = HEROES;

//   selectedHero?: Hero;

//   //añadimos el onSelect es para que cuando se haga un click se asigne  el heroe al componente selectedHero
//   onSelect(hero: Hero): void {
//   this.selectedHero = hero;
// }
// }


//fase 4
// Clase del componente HeroesComponent que implementa OnInit
// export class HeroesComponent implements OnInit {

//   // Variable para almacenar al héroe seleccionado
//   selectedHero?: Hero;

//   // Arreglo para almacenar la lista de héroes
//   heroes: Hero[] = [];

//   // Constructor del componente HeroesComponent
//   constructor(private heroService: HeroService, private messageService: MessageService) { }

//   // Método ngOnInit que se ejecuta al inicializar el componente
//   ngOnInit(): void {
//     // Llama al metodo getHeroes() para obtener la lista de heroes al inicializar el componente
//     this.getHeroes();
//   }

//   // Metodo onSelect para seleccionar un héroe
//   onSelect(hero: Hero): void {
//     // Asigna el héroe seleccionado a la variable selectedHero
//     this.selectedHero = hero;
//     // Agrega un mensaje al servicio MessageService
//     this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
//   }

//   // Metodo getHeroes para obtener la lista de heroes
//   getHeroes(): void {
//     // Llama al método getHeroes() del servicio HeroService
//     // Suscribe al resultado y asigna la lista de héroes al arreglo heroes
//     this.heroService.getHeroes()
//       .subscribe(heroes => this.heroes = heroes);
//   }
// }

//FASE 5
// Clase HeroesComponent que implementa la interfaz OnInit
export class HeroesComponent implements OnInit {
  // Arreglo de héroes que se mostrarán en el componente
  heroes: Hero[] = [];

  // Constructor del componente que recibe una instancia del servicio HeroService
  constructor(private heroService: HeroService) { }

  // Método ngOnInit que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Llama al método getHeroes() para obtener la lista de héroes
    this.getHeroes();
  }

  // Método para obtener la lista de héroes desde el servicio HeroService
  getHeroes(): void {
    // Utiliza el método getHeroes() del servicio HeroService y subscribe para obtener la lista de héroes
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
