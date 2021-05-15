import {countReducer} from './counter.reducer'

export interface Counter{
  counter: number;
  channelName: string;
}


export interface AppState{
  count: Counter;
}

export const AppReducer = {
  count: countReducer
}
