import {createReducer, on} from '@ngrx/store';
import {initialState} from './counter.state';
import {decrement, increment, reset} from './counter.action';


const counterReducer = createReducer(initialState,
  on(increment, (state) => ({...state, counter: state.counter + 1})),
  on(decrement, (state) => ({...state, counter: state.counter - 1})),
  on(reset, (state) => ({...state, counter: 0})));


export function countReducer(state, action){
  return counterReducer(state, action);
}
