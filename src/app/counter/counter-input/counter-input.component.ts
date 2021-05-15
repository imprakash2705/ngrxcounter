import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {channelNameChanged, customIncrement, decrement, increment, reset} from '../../store/counter/counter.action';
import {AppState, Counter} from '../../store/counter/counter.model';
import {getChannelName} from '../../store/counter/counter.selector';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {
value;
channelName;
  constructor( private store: Store <AppState>) { }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe((res) => {
      this.channelName = res;
    })
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
  onCustomIncrement(){
    this.store.dispatch(customIncrement({value: this.value}));
  }
  onChannelNameChanged(){
    this.store.dispatch(channelNameChanged({name: this.channelName}));
  }
}
