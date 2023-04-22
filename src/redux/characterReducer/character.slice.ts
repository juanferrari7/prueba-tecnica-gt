import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type CharacterState } from './character.types'
// import { type AppThunk } from './store'
import { type Character } from '../../types'
import { fetchCharacters } from '../../services/fetchCharacters'

const initialState: CharacterState = {
  allCharacters: [],
  characters: [],
  loading: false,
  error: null
}

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    filterByGender (state, action: PayloadAction<string>) {
      const allCharacters = [...state.allCharacters]
      const filteredCharacters = action.payload === 'all'
        ? allCharacters
        : allCharacters.filter((character) => character.gender.toLowerCase().includes(action.payload.toLowerCase()))
      return {
        ...state,
        characters: filteredCharacters
      }
    },
    filterByEyeColor (state, action: PayloadAction<string>) {
      const characters = [...state.characters]
      const filterEyeColor = characters.filter((character) => character.eye_color.toLowerCase().includes(action.payload.toLowerCase()))
      return {
        ...state,
        characters: filterEyeColor
      }
    },
    fetchCharactersStart (state) {
      return {
        ...state,
        loading: true,
        error: null,
        allCharacters: []
      }
    },
    fetchCharactersSuccess (state, action: PayloadAction<Character[]>) {
      return {
        ...state,
        loading: false,
        error: null,
        allCharacters: action.payload,
        characters: action.payload
      }
    },
    fetchCharactersError (state, action: PayloadAction<Error>) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        allCharacters: []
      }
    },
    reset (state) {
      return {
        ...state,
        characters: state.allCharacters
      }
    }
  }

})

export const getAllCharacters = () => {
  return async (dispatch: any) => {
    dispatch(fetchCharactersStart())
    try {
      const response = await fetchCharacters()
      dispatch(fetchCharactersSuccess(response))
    } catch (error) {
      dispatch(fetchCharactersError(error as Error))
    }
  }
}

export const {
  filterByEyeColor,
  filterByGender,
  fetchCharactersStart,
  fetchCharactersSuccess,
  fetchCharactersError,
  reset
} = characterSlice.actions

export default characterSlice.reducer
