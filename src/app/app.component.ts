// Importa el decorador Component desde el modulo @angular/core
import { Component } from '@angular/core';

// Decorador Component que define el componente AppComponent
@Component({
  // Selector CSS para identificar el componente en las plantillas HTML
  selector: 'app-root',
  // URL del archivo HTML que contiene la plantilla del componente
  templateUrl: './app.component.html',
  // URLs de archivos CSS que contienen estilos especificos para el componente
  styleUrls: ['./app.component.css']
})
// Clase que define la logica del componente
export class AppComponent {
  // Propiedad title que contiene el texto 'Recorrido de Ciudades'
  title = 'Recorrido de Ciudades';
}
