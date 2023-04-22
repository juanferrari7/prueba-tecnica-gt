export interface FilmsResults {
  count: number
  next: null
  previous: null
  results: Film[]
}

export interface Film {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: Date
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: Date
  edited: Date
  url: string
}

export interface CharactersResults {
  count: number
  next: string
  previous: null
  results: Character[]
}

export interface Character {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: Gender
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: Date
  edited: Date
  url: string
}

export enum Gender {
  Female = 'female',
  Male = 'male',
  NA = 'n/a',
}
