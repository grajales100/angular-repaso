import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Iroman';
  public age: number = 45;
  private nombreCambiar = 'spiderman';
  private ageCambiar = 20;
  public contadorNombre = 0;
  public contadorAge = 0;

  get capitalizedName():string{

    return this.name.toUpperCase();

  }

  getHeroDescripcion():string{
    return `${ this.name } - ${ this.age }`;
  }

  cambiarNombre():void{
    let nombreAnterior = this.name;
    this.name = this.nombreCambiar;
    this.nombreCambiar = nombreAnterior;
    this.contadorNombre +=1;
  }

  cambiarEdad():void{
    let edadAnterior = this.age;
    this.age = this.ageCambiar;
    this.ageCambiar = edadAnterior;
    this.contadorAge += 1;
  }

  reset(){
    this.contadorAge = 0;
    this.contadorNombre = 0;
  }

}
