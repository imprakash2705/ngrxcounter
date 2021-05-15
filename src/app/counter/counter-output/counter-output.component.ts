import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Counter} from '../../store/counter/counter.model';
import {getCounter} from '../../store/counter/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
counter: number;
  constructor(private store: Store <{count: Counter}>) { }

  ngOnInit(): void {
     this.store.select(getCounter).subscribe((res) => {
       this.counter = res;
     })
  }

}
