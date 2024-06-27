import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {
  title = 'Elvis Ramirez';
  number = 25;
  imagenUrl='../../img.jpg';

  towWayDataBinding='';

  onClick() {
    console.log('Click en el boton');
    alert('boton precionado');

  }

}
