// clock-color.ts
import * as clockColorActions from '../actions/clock-color';

export interface State {
    clockColor: string;
}

const initialState: State = {
    clockColor: '',
};

export function clockColorReducer(state: State = initialState,
                                action: clockColorActions.Actions): State {
    switch (action.type) {
        case clockColorActions.SET_RED:
            return { clockColor: 'red' };
        case clockColorActions.SET_BLUE:
            return { clockColor: 'blue' };
        default:
            return state;
    }
}

export const getClockColor = (state: State) => {
    return state.clockColor;
};
// export const getClockColor = (state: State) => state.clock_color;
