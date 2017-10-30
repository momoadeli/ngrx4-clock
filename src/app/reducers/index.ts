import { ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromClockColor from '../clock/state-management/reducers/clock-color';

// aggregation of all store sub-states with stong type checking
export interface State {
  clockColor: fromClockColor.State;
}

// aggregation of all store reducers with strong type checking
export const reducers: ActionReducerMap<State> = {
  clockColor: fromClockColor.clockColorReducer
};

/**
 * clock_color Reducers
 */
export const getClockColorState =
    createFeatureSelector<fromClockColor.State>('clockColor');

export const getClockColor = createSelector(
  getClockColorState,
  fromClockColor.getClockColor
);
