import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importamos Formsmodule ya que con esto podemos ocupar la sintaxis de  ngModel, que ocupamos en la primera fase
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// Importa el componente AppComponent desde el archivo 'app.component'
import { AppComponent } from './app.component';

//aca abrimos la ruta relativa para buscar e importar HeroesComponent
import { HeroesComponent } from './heroes/heroes.component';

//importamos los archivos de la carpeta de hero-detail
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// Importa el componente MessagesComponent desde el archivo 'messages/messages.component'
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    //FASE 4
    // Declaraciones de componentes, directivas y pipes que pertenecen a este módulo
    
    DashboardComponent,
    MessagesComponent,
  ],
  imports: [
    //aca agregamos FormsModule a la importancion de NgModule, esta
    //parte es importante ya que esta importacion contiene la lista de modulos externos que necesita la app
    BrowserModule,
    FormsModule,

    // Importa otros módulos cuyas clases exportadas son necesarias para las plantillas de componentes declaradas en este módulo
    HeroesComponent,
    HeroDetailComponent,
    AppRoutingModule,

  ],
  // Proveedores de servicios que este módulo contribuye a la colección global de servicios
  providers: [],
   // Componente raíz que Angular crea y inserta en el index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
