import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/store'
import { getAllCharacters } from '../redux/characterReducer/character.slice'
import Filters from './Filters'
import './Character.css'

export default function CharactersList () {
  const characters = useAppSelector((state) => state.characters.characters)
  const loading = useAppSelector((state) => state.characters.loading)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllCharacters())
  }, [])

  return (
    <main>
      <Filters />
      <div>
        {loading && <p>Loading...</p>}
        <div className='characterContainer'>
          {characters?.map((character) => {
            return (
              <div className='characterCard' key={character.name}>
                <h2 className='characterName'>{character.name}</h2>
                <p><strong>Eye color: </strong>{character.eye_color}</p>
                <p><strong>Gender: </strong>{character.gender}</p>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

// ""
// ""
// ""
// ""
// ""
// ""
// ""
// ""
// ""
// ""
// ""
// ""
// ""
