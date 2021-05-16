import {Component, OnChanges, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-counter-show',
  templateUrl: './counter-show.component.html',
  styleUrls: ['./counter-show.component.css']
})
export class CounterShowComponent implements OnInit, OnChanges {
@Input() name = 'prakash'
  constructor() {
  console.log('constructor')
  }
ngOnChanges(){
  console.log('ngonchanges')
}
  ngOnInit(): void {
  console.log('ngoninit')
  }

  click(){
    return 'hello'
  }
}
