import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from '../../store/counter/counter.action';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {

  constructor( private store: Store <{count: {counter : number}}>) { }

  ngOnInit(): void {
  }
onIncrement(){
    this.store.dispatch(increment());
  }
  onDecrement(){
    this.store.dispatch(decrement());
  }
  onReset(){
    this.store.dispatch(reset());
  }
}
