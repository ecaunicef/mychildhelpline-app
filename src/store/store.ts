import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { thunk } from 'redux-thunk'

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
