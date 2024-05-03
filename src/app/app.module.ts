// Importa el módulo NgModule desde '@angular/core'
import { NgModule } from '@angular/core'; 

// Importa el módulo BrowserModule desde '@angular/platform-browser'
import { BrowserModule } from '@angular/platform-browser'; 

// Importa el módulo FormsModule desde '@angular/forms', que proporciona funcionalidades para formularios en Angular, incluido ngModel.
import { FormsModule } from '@angular/forms'; 

// Importa el componente AppComponent desde './app.component'
import { AppComponent } from './app.component'; 

// Importa el componente HeroesComponent desde './heroes/heroes.component'
import { HeroesComponent } from './heroes/heroes.component'; 

// Importa el componente HeroDetailComponent desde './hero-detail/hero-detail.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; 

// Importa el componente MessagesComponent desde './messages/messages.component'
import { MessagesComponent } from './messages/messages.component'; 

// Importa el módulo AppRoutingModule desde './app-routing.module', que probablemente contiene configuraciones de enrutamiento de la aplicación.
import { AppRoutingModule } from './app-routing.module'; 

// Importa el componente DashboardComponent desde './dashboard/dashboard.component'
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
