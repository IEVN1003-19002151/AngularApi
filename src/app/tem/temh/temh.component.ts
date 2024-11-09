<<<<<<< HEAD
import { Component, EventEmitter, Output, Input} from '@angular/core';
=======
import { Component,Input } from '@angular/core';
>>>>>>> ad582129bff2e2367557dac0232c1aef27417761

@Component({
  selector: 'app-temh',
  standalone: true,
  imports: [],
  templateUrl: './temh.component.html',
<<<<<<< HEAD
  styles: ''
})
export class TemhComponent {
  @Input() mensaje: string = ''

  @Output() mensaje2 = new EventEmitter<string>();
  enviarMensaje(){
    this.mensaje2.emit('Hola desde el hijo');
  }
  
=======
  styles: ``
})
export class TemhComponent {

  @Input() mensaje:string='';

>>>>>>> ad582129bff2e2367557dac0232c1aef27417761
}
