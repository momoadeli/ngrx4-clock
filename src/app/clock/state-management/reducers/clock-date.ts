// clock-date.ts
import * as clockDateActions from '../actions/clock-date';

export interface State {
    clockDate: Date;
}

const initialState: State = {
    clockDate: null,
};

export function clockDateReducer(state: State = initialState,
                                action: clockDateActions.Actions): State {
    switch (action.type) {
        case clockDateActions.CLOCK_TICK:
            return { clockDate: new Date() };
        case clockDateActions.GET_CLOCK_TICKER:
            return state;
        default:
            return state;
    }
}

export const getClockDate = (state: State) => {
    return state.clockDate;
};
