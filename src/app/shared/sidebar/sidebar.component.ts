import { Component} from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent {

get historial (){
  return this.gifservice.valores;
}

mostrarSeleccion(argument: string){
  this.gifservice.insertarValores(argument)
}

  constructor(private gifservice : GifsService) { }
}
