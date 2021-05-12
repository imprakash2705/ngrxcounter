import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Counter} from './counter.model';

const getSelector = createFeatureSelector<Counter>('count');
export const getCounter = createSelector(getSelector, (state) => {
  return state.counter;
});


export const getChannelName = createSelector(getSelector, (state) => {
  return state.channelName;
});
