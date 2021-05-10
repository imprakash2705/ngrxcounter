import {createReducer, on} from '@ngrx/store';
import {initialState} from './counter.state';
import {decrement, increment, reset} from './counter.action';


const counterReducer = createReducer(initialState,
  on(increment, (state) =>({...state})),
  on(decrement, (state) => ({...state})),
  on(reset, (state) => ({...state})));


export function countReducer(state, action){
  return counterReducer(state, action);
}
