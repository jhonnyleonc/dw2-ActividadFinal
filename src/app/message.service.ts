// Importa el decorador Injectable desde la biblioteca '@angular/core'
import { Injectable } from '@angular/core';

// Decorador Injectable para indicar que la clase puede ser inyectada con dependencias
@Injectable({
  // providedIn: 'root' significa que Angular proporcionará una única instancia globalmente para toda la aplicación
  providedIn: 'root',
})
// Clase del servicio MessageService
export class MessageService {
  // Arreglo para almacenar los mensajes
  messages: string[] = [];

  // Método para agregar un mensaje al arreglo messages
  add(message: string) {
    this.messages.push(message);
  }

  // Método para limpiar el arreglo messages
  clear() {
    this.messages = [];
  }
}
