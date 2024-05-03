/*2da fase
  nos piden crear el archivo mock-heroes.ts

  - luego nos piden crear dentro del archivo una constante HEROES con una serie de diez heroes y exportarlo.
  - esto luego se tiene que exportar al archivo de heroes.component.ts en el cual al darle click se va traer los datos del heroe
  - en la parte del formulario en la pagina

*/

import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 12, name: 'Buenos Aires', image: 'assets/images/bs.jpg' },
  { id: 13, name: 'Medellin', image: 'assets/images/mll.jpg' },
  { id: 14, name: 'Santa Cruz', image: 'assets/images/scz.JPG' },
  { id: 15, name: 'Santiago', image: 'assets/images/sa.jpeg' },
  { id: 16, name: 'Lima', image: 'assets/images/lima.jpg' },
  { id: 17, name: 'Ciudad de Mexico', image: 'assets/images/mx.jpeg' },
  { id: 18, name: 'Sao Paulo', image: 'assets/images/br.jpg' },
  { id: 19, name: 'Moscu', image: 'assets/images/rs.jpg' },
  { id: 20, name: 'Tokio', image: 'assets/images/jp.jpg' }
];