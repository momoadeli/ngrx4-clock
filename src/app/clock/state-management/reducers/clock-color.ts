// clock-color.ts
import { Action } from '@ngrx/store';

export const SET_RED = 'red';
export const SET_BLUE = 'blue';

export function clockColorReducer(state: string, action: Action) {
    switch (action.type) {
        case SET_RED:
            return state = 'red';
        case SET_BLUE:
            return state = 'blue';
        default:
            return state = '';
    }
}
