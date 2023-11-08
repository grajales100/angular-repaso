import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primerProyecto';
  name: number | string = 'String';
  nombres = ['hola','adios'];
  cantidadGeneral:number = 0;
  public counter: number = 10;

  constructor(){
    this.name = 'todo';
    let cantidad: number = 0;
    console.log(cantidad);
    this.nombres.forEach(number=>{
      cantidad += number.length;
    });
    console.log(cantidad);
    this.cantidadGeneral = cantidad;
  }

}
