import { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS } from './actions';

const intialState = {
    allSmurfs: [],
    isLoading: false,
    error: ''
};

export const smurfReducer = (state = intialState, action) => {
    switch(action.type) {
        case FETCHING_SMURFS_START:
            return {
                ...state,
                isloading: true,
                error: ''
            };
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                allSmurfs: action.payload,
                isLoading: false
            };
        default:
            return state
    }
}