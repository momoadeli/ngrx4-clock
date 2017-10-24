import { ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromClockColor from '../clock/state-management/reducers/clock-color';

export interface State {
  clockColor: fromClockColor.State;
}

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
