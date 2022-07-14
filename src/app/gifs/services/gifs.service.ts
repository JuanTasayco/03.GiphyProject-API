import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class GifsService {

private API: string = "J4r77j8w5TfMYqKkdlYkHW9tayJznEn4";
private servicioUrl: string = "https://api.giphy.com/v1/gifs"
private _valores : string [] = [];
public arrayApi: any [] = [];


get valores (){
  return [...this._valores];
}

  insertarValores(valorArgumento : string ){
    valorArgumento = valorArgumento.trim();
    if(!this._valores.includes(valorArgumento)){
      this._valores.unshift(valorArgumento);
      this._valores = this._valores.splice(0,10);
      localStorage.setItem("valoresKey", JSON.stringify(this._valores));
    }


    const params = new HttpParams()
               .set("api_key",this.API)
               .set("limit","10")
               .set("q",valorArgumento)

    this.http.get<any>(`${this.servicioUrl}/search`,{params})
    .subscribe(({data})=>{
        this.arrayApi = data;  
      localStorage.setItem("gifskey",JSON.stringify(this.arrayApi));
    })

  }


  constructor(private http:HttpClient) { 
    this._valores = JSON.parse(localStorage.getItem("valoresKey")!) || [];
    this.arrayApi = JSON.parse(localStorage.getItem("gifsKey")!) || [];
  }

}





