import { combineReducers } from 'redux'
import { loadingReducer } from './reducers/commonReducers'
import accessibilityReducer from './reducers/accessibilityReducer'
import languageReducer from './reducers/languageReducer'
import chatReducer from './reducers/chatReducer'
import { emojiReducer } from './reducers/emojiModalReducer'
import { locationReducer } from './reducers/locationReducer'

const rootReducer = combineReducers({
    loader: loadingReducer,
    language: languageReducer,
    accessibility: accessibilityReducer,
    chat: chatReducer,
    emoji: emojiReducer,
    location: locationReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
