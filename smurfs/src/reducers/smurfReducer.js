import { SMURF_NAME, SMURF_AGE, SMURF_HEIGHT } from './actions';

const initialState = {
    name: "josh",
    age: 1,
    height: 3,
    id: 1
};

export function reducer(state = initialState, action) {
    switch(action.type) {
        case SMURF_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case SMURF_AGE: {
            return {
                ...state,
                age: action.payload
            }
        }
        case SMURF_HEIGHT: {
            return {
                ...state,
                height: action.payload
            }
        }
        default:
            return state
    }
}