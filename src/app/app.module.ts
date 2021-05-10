import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterShowComponent } from './counter/counter-show/counter-show.component';
import { CounterInputComponent } from './counter/counter-input/counter-input.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import {AppState} from './store/counter/counter.model';
import {countReducer} from './store/counter/counter.reducer';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    CounterShowComponent,
    CounterInputComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({count: countReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
