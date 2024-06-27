import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activida',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './activida.component.html',
  styleUrl: './activida.component.css'
})
export class ActividaComponent {
 
   titulo: string = 'Nuevo Componente ';
   imageUrl: string = '../../elvis.png';
  inputValue: string = '';
   
   selectedOption: string = '';
   public isEstudiante: boolean = false;
   public isMaestro: boolean = false;
constructor() {}

onInputChange(event: Event): void {
  const inputElement = event.target as HTMLInputElement;
  this.inputValue = inputElement.value;
}

}