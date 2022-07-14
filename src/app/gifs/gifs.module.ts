import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaComponent } from './busqueda/busqueda.component';
import { MainComponent } from './main/main.component';
import { ResultadosComponent } from './resultados/resultados.component';

import { GifsService } from './services/gifs.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    BusquedaComponent,
    MainComponent,
    ResultadosComponent
  ],
  exports:[
    MainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  providers: [
    GifsService
  ]
  
})
export class GifsModule { }
