// Importa el decorador NgModule desde la biblioteca '@angular/core'
import { NgModule } from '@angular/core';
// Importa el módulo RouterModule y la interfaz Routes desde la biblioteca '@angular/router'
import { RouterModule, Routes } from '@angular/router';
// Importa el componente HeroesComponent desde el archivo './heroes/heroes.component'
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// Define las rutas de la aplicación como un arreglo de objetos de tipo Routes
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

// Decorador NgModule para definir el módulo de enrutamiento AppRoutingModule
@NgModule({
  // Importa el módulo RouterModule y configura las rutas definidas en 'routes' utilizando el método 'forRoot'
  imports: [RouterModule.forRoot(routes)],
  // Exporta el módulo RouterModule para que las directivas de enrutamiento estén disponibles en otros módulos
  exports: [RouterModule]
})
// Clase del módulo de enrutamiento AppRoutingModule
export class AppRoutingModule { }
