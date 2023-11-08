import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onId: EventEmitter<string> = new EventEmitter();


  @Input()
  public caracterList: Character[] | undefined;

  onDeleteCharacter(id:string | undefined):void{
    this.onId.emit(id);
  }

}
