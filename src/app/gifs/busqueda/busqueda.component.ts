import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',

})
export class BusquedaComponent {

 valor: string = ""

  tomarValor(){
    
  if(this.valor.trim().length<1 || this.valor.trim().length>30) return;
    this.gifservice.insertarValores(this.valor);
    this.valor= "";
    
  }

 nuevo(){
  console.log(this.valor)
}
  
  constructor(private gifservice: GifsService) { }
}
