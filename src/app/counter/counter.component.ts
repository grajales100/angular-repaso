import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent implements OnInit {

  public counter:number = 10;

  constructor() { }

  public incrementarBy(value:number):void{

    this.counter +=value;

  }

  public resect():void{
    this.counter = 10;
  }

  ngOnInit() { }
}
