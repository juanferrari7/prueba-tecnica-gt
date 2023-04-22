export interface CharacterState {
  allCharacters: Character[]
  characters: Character[]
  loading: boolean
  error: Error | null
}

export interface Character {
  name: string
  eye_color: string
  gender: Gender
  homeworld: string
  url: string
}

export enum Gender {
  Female = 'female',
  Male = 'male',
  NA = 'n/a',
}
