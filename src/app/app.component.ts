import { Component } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxcounter'
  constructor() {
    let person = {name:'Prakash'}
   let observableperson= of(person);
    observableperson.subscribe((data)=>{
      console.log(data)
    })
  }
}
