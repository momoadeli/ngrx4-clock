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
        // case clockDateActions.SET_RED:
        //     return { clockDate: 'red' };
        case clockDateActions.CLOCK_TICK:
            return { clockDate: new Date() };
        default:
            return state;
    }
}

export const getClockDate = (state: State) => {
    return state.clockDate;
};
// export const getClockDate = (state: State) => state.clock_color;
