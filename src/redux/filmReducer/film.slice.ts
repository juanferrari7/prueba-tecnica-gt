import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type FilmState, type Film } from './film.types'
import { fetchFilms } from '../../services/fetchFilms'

const initialState: FilmState = {
  allFilms: [],
  loading: false,
  error: null
}

const filmSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    fetchFilmsStart (state) {
      return {
        ...state,
        loading: true,
        error: null,
        allFilms: []
      }
    },
    fetchFilmsSuccess (state, action: PayloadAction<Film[]>) {
      return {
        ...state,
        loading: false,
        error: null,
        allFilms: action.payload
      }
    },
    fetchFilmsError (state, action: PayloadAction<Error>) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        allFilms: []
      }
    }
  }
})

export const getAllFilms = () => {
  return async (dispatch: any) => {
    dispatch(fetchFilmsStart())
    try {
      const response = await fetchFilms()
      dispatch(fetchFilmsSuccess(response))
    } catch (error) {
      dispatch(fetchFilmsError(error as Error))
    }
  }
}

export const {
  fetchFilmsStart,
  fetchFilmsSuccess,
  fetchFilmsError
} = filmSlice.actions

export default filmSlice.reducer
