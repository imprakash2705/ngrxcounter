import {AfterContentInit, AfterViewInit, Component, ViewChild} from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'ngrxcounter'
  @ViewChild('sample') input;
  constructor() {
    let person = {name:'Prakash'}
   let observableperson= of(person);
    observableperson.subscribe((data)=>{
      console.log(data)
    })
  }


  ngAfterViewInit() {
    console.log(this.input)

  }
  }


