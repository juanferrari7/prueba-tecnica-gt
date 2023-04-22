import { type Action, type ThunkAction, configureStore } from '@reduxjs/toolkit'
import characterReducer from './characterReducer/character.slice'
import filmReducer from './filmReducer/film.slice'

const store = configureStore({
  reducer: {
    characters: characterReducer,
    films: filmReducer
  }
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
