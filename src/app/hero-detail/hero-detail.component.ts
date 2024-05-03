/*
  FASE 3
  - para iniciar con la fase 3 tenemos que entrar al terminal y generar la carpeta de hero-detail con
    ng generate component hero-detail

*/


// Importa los decoradores Component, Input y OnInit desde @angular/core
import { Component, Input, OnInit } from '@angular/core';

// Importa la clase ActivatedRoute desde @angular/router para obtener información sobre la ruta activa
import { ActivatedRoute } from '@angular/router';

// Importa NgFor, NgIf y UpperCasePipe desde @angular/common
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';

// Importa FormsModule para trabajar con formularios en el componente
import { FormsModule } from '@angular/forms';

// Importa la clase Hero desde el archivo 'hero.ts' ubicado en el directorio '../' relativo al archivo actual
import { Hero } from '../hero';

// Importa el servicio HeroService desde el archivo 'hero.service' ubicado en el directorio '../' relativo al archivo actual
import { HeroService } from '../hero.service';

// Importa la clase Location desde @angular/common para controlar la ubicación del navegador
import { Location } from '@angular/common';







// Decorador @Component para definir un componente en Angular
@Component({
  // Indica que este componente es independiente y no tiene dependencias externas
  standalone: true,
  // Selector CSS para este componente
  selector: 'app-hero-detail',
  // Ruta al archivo de plantilla HTML para este componente
  templateUrl: './hero-detail.component.html',
  // Rutas a los archivos de estilos CSS para este componente
  styleUrls: ['./hero-detail.component.css'],
  // Importa módulos necesarios para este componente
  imports: [FormsModule, NgIf, UpperCasePipe],
})


//FASE 3
// Clase del componente HeroDetailComponent
// export class HeroDetailComponent {
//   // Propiedad de entrada (input) para recibir un objeto Hero desde el componente padre
//   @Input() hero?: Hero;
// }

//FASE5
// Clase HeroDetailComponent que implementa la interfaz OnInit
export class HeroDetailComponent implements OnInit {
  // Variable que contendrá el héroe a mostrar, inicializada como undefined
  hero: Hero | undefined;

  // Constructor del componente que recibe instancias de ActivatedRoute, HeroService y Location
  constructor(
    private route: ActivatedRoute, // ActivatedRoute proporciona acceso a la información de la ruta actual
    private heroService: HeroService, // HeroService se utiliza para obtener los detalles del héroe
    private location: Location // Location se utiliza para navegar hacia atrás en la historia de navegación
  ) {}

  // Método ngOnInit que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Llama al método getHero() para obtener los detalles del héroe
    this.getHero();
  }

  // Método para obtener los detalles del héroe
  getHero(): void {
    // Obtiene el ID del héroe de los parámetros de la ruta actual
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Utiliza el método getHero(id) del servicio HeroService y subscribe para obtener los detalles del héroe
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  // Método para navegar hacia atrás en la historia de navegación
  goBack(): void {
    this.location.back();
  }
}
