import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',

})
export class BusquedaComponent {

 @ViewChild("value") valor!: ElementRef;

  /* tomarValor(){
    
  if(this.valor.trim().length<1 || this.valor.trim().length>30) return;
    this.gifservice.insertarValores(this.valor);
    this.valor= "";
    
  }
 */

  obtenerKeyUP(event : KeyboardEvent){
 const valor = this.valor.nativeElement.value;
 
  if(event.keyCode !== 13) return;
    if(valor.trim().length<1 || valor.trim().length>30) return;
    this.gifservice.insertarValores(valor);
    this.valor.nativeElement.value= ""; 
  }

  constructor(private gifservice: GifsService) {

   }
}
