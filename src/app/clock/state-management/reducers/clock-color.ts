// clock-color.ts
import * as clockColorActions from '../actions/clock-color';

export interface State {
    clock_color: string;
}

const initialState: State = {
    clock_color: '',
};

export function clockColorReducer(state: State = initialState,
                                action: clockColorActions.Actions): State {
    switch (action.type) {
        case clockColorActions.SET_RED:
            return { clock_color: 'red' };
        case clockColorActions.SET_BLUE:
            return { clock_color: 'blue' };
        default:
            return state;
    }
}
