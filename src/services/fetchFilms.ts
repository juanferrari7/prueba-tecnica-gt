import axios from 'axios'
import { type Film } from '../types'

export async function fetchFilms () {
  const filmData: Film[] = await axios.get('https://swapi.dev/api/films/').then(res => res.data.results).catch(e => { console.log(e) })

  const mappedFilms = filmData.map((el) => {
    return {
      title: el.title,
      episode_id: el.episode_id,
      director: el.director,
      characters: el.characters
    }
  })

  return mappedFilms
}
