import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    poder: 1000
  },{
    id: uuid(),
    name: 'Goku',
    poder: 9500
  },{
    id: uuid(),
    name:'Vegueta',
    poder:7600
  }];

  nuevoCharacter( character:Character){

    const newCharacter: Character = {
      id: uuid(), ...character
    }

    this.characters.push(newCharacter);
  }

  eliminarCharacter(id:string){
    this.characters = this.characters.filter( character => character.id !== id)
    //this.characters.splice(indice, 1);
  }
}
