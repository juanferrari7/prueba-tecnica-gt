export interface FilmState {
  allFilms: Film[]
  loading: boolean
  error: Error | null
}

export interface Film {
  title: string
  episode_id: number
  director: string
  characters: string[]
}
