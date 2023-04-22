import axios from 'axios'
import { type Character } from '../types'

export const fetchCharacters = async (): Promise<Character[]> => {
  const urls = [
    'https://swapi.dev/api/people/?page=1',
    'https://swapi.dev/api/people/?page=2',
    'https://swapi.dev/api/people/?page=3',
    'https://swapi.dev/api/people/?page=4',
    'https://swapi.dev/api/people/?page=5',
    'https://swapi.dev/api/people/?page=6',
    'https://swapi.dev/api/people/?page=7',
    'https://swapi.dev/api/people/?page=8',
    'https://swapi.dev/api/people/?page=9'
  ]
  const requests = urls.map(async url => await axios.get(url))

  const responses = await Promise.all(requests)

  const characterData: Character[] = []

  responses.forEach(response => {
    if (response.data.results) {
      response.data.results.forEach((character: any) => {
        characterData.push(character)
      })
    }
  })

  characterData.map((el) => {
    return {
      name: el.name,
      eye_color: el.eye_color,
      gender: el.gender,
      url: el.url
    }
  })

  return characterData
}
