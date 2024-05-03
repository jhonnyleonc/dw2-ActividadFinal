// Importa el decorador Injectable desde la biblioteca '@angular/core'
import { Injectable } from '@angular/core';

// Importa Observable y of desde 'rxjs'
import { Observable, of } from 'rxjs';

// Importa la interfaz Hero desde el archivo 'hero.ts'
import { Hero } from './hero';
// Importa la constante HEROES desde el archivo 'mock-heroes.ts'
import { HEROES } from './mock-heroes';
// Importa el servicio MessageService desde el archivo 'message.service.ts'
import { MessageService } from './message.service';




//FASE 4
// Decorador Injectable para indicar que la clase puede ser inyectada con dependencias
// @Injectable({
//   // providedIn: 'root' significa que Angular proporcionara una unica instancia globalmente para toda la aplicacion
//   providedIn: 'root',
// })
// // Clase del servicio HeroService
// export class HeroService {

//   // Constructor del servicio HeroService que recibe una instancia de MessageService
//   constructor(private messageService: MessageService) { }

//   // Método para obtener la lista de héroes como un Observable
//   getHeroes(): Observable<Hero[]> {
//     // Convierte la constante HEROES en un Observable usando la funcion of
//     const heroes = of(HEROES);
//     // Agrega un mensaje al servicio MessageService
//     this.messageService.add('HeroService: fetched heroes');
//     // Retorna el Observable con la lista de heroes
//     return heroes;
//   }
// }

///FASE 5
// Servicio HeroService con el decorador Injectable que proporciona el servicio en el nivel raíz de la aplicación
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Constructor del servicio que recibe una instancia del servicio MessageService
  constructor(private messageService: MessageService) { }

  // Método para obtener todos los héroes
  getHeroes(): Observable<Hero[]> {
    // Convierte el arreglo de héroes HEROES en un Observable
    const heroes = of(HEROES);
    // Agrega un mensaje al servicio MessageService para indicar que se obtuvieron los héroes
    this.messageService.add('HeroService: fetched heroes');
    // Retorna el Observable con los héroes
    return heroes;
  }

  // Método para obtener un héroe por su ID
  getHero(id: number): Observable<Hero> {
    // Encuentra el héroe con el ID especificado en el arreglo HEROES
    const hero = HEROES.find(h => h.id === id)!;
    // Agrega un mensaje al servicio MessageService para indicar que se obtuvo el héroe con el ID especificado
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    // Retorna un Observable con el héroe encontrado
    return of(hero);
  }
}

