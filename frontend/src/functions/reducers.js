import { FETCH_USERS_FAILURE, FETCH_USERS_START, FETCH_USERS_SUCCESS } from "./types";


export function fetchUserdata(state, action) {
    switch (action.type) {
        case FETCH_USERS_START:
            return {
                ...state,
                loading: true,
                error: false
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: false
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}