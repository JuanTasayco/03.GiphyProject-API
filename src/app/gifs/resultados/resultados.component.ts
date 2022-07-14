import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',

})
export class ResultadosComponent  {

 
  get historial(){
    return this.gifservice.arrayApi;
  }



  constructor(private gifservice : GifsService) { }


}
