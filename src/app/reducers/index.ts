import { ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromClockColor from '../clock/state-management/reducers/clock-color';
import * as fromClockDate from '../clock/state-management/reducers/clock-date';

// aggregation of all store sub-states with stong type checking
export interface State {
  clockColor: fromClockColor.State;
  clockDate: fromClockDate.State;
}

// aggregation of all store reducers with strong type checking
export const reducers: ActionReducerMap<State> = {
  clockColor: fromClockColor.clockColorReducer,
  clockDate: fromClockDate.clockDateReducer
};

/**
 * clock_color Reducers selector
 */
export const getClockColorState =
    createFeatureSelector<fromClockColor.State>('clockColor');

export const getClockColor = createSelector(
  getClockColorState,
  fromClockColor.getClockColor
);

/**
 * clock_date Reducers selector
 */
export const getClockDateState =
createFeatureSelector<fromClockDate.State>('clockDate');

export const getClockDate = createSelector(
getClockDateState,
fromClockDate.getClockDate
);
