// Importa el decorador Component desde la biblioteca '@angular/core'
import { Component } from '@angular/core';
// Importa el servicio MessageService desde el archivo 'message.service.ts'
import { MessageService } from '../message.service';

// Decorador Component para definir el componente MessagesComponent
@Component({
  // Selector CSS para este componente
  selector: 'app-messages',
  // Ruta al archivo de plantilla HTML para este componente
  templateUrl: './messages.component.html',
  // Rutas a los archivos de estilos CSS para este componente
  styleUrls: ['./messages.component.css']
})
// Clase del componente MessagesComponent
export class MessagesComponent {

  // Constructor del componente MessagesComponent que recibe una instancia de MessageService
  constructor(public messageService: MessageService) {}

}
