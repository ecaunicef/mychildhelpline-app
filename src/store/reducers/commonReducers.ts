import { HIDE_LOADING, SHOW_LOADING } from '../actions/commonActions'
import { LoadingActionTypes } from '../types/commonTypes'

interface LoadingState {
    isLoading: boolean
}

const initialState: LoadingState = {
    isLoading: false,
}

export const loadingReducer = (
    state = initialState,
    action: LoadingActionTypes
) => {
    switch (action.type) {
        case SHOW_LOADING:
            return { isLoading: true }
        case HIDE_LOADING:
            return { isLoading: false }
        default:
            return state
    }
}
