import { ActionReducerMap } from '@ngrx/store';
import * as fromClockColor from '../clock/state-management/reducers/clock-color';

export interface State {
  clock_color: fromClockColor.State;
}

export const reducers: ActionReducerMap<State> = {
  clock_color: fromClockColor.clockColorReducer
};
