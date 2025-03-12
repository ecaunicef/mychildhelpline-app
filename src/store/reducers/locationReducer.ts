import { LOCATION__ADD } from '../actions/commonActions'
import { LocationAction, LocationState } from '../types/commonTypes'

const initialState: LocationState = {
    latitude: '',
    longitude: '',
    countryData: {
        country_code: '',
        country_name: '',
        district_code: '',
        district_name: '',
    },
}

export const locationReducer = (
    state = initialState,
    action: LocationAction
) => {
    switch (action.type) {
        case LOCATION__ADD:
            return {
                ...state,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
                countryData: { ...action.payload.countryData },
            }
        default:
            return state
    }
}
