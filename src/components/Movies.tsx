import { Link } from 'react-router-dom'
import './Movies.css'
import { useAppDispatch, useAppSelector } from '../hooks/store'
import { useEffect } from 'react'
import { getAllFilms } from '../redux/filmReducer/film.slice'

export default function MoviesList () {
  const films = useAppSelector((state) => state.films.allFilms)
  const loading = useAppSelector((state) => state.films.loading)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllFilms())
  }, [])

  return (
    <div className='movieContainer'>
      {loading && <div>Loading...</div>}
      <div className='movies'>
              {films.map((film) => (
          <div className='movieCard' key={film.title}>
            <h3>{film.title}</h3>
            <p>Directed by {film.director}</p>
            <p>Episode n°: {film.episode_id}</p>
            <h5>Characters:</h5>
            <ul>
              {film.characters.map((el, index) => {
                return (
                <Link to={`${el}`} key={index}>
                    <li>
                      <small>{el}</small>
                    </li>
                </Link>
                )
              }
              )}
            </ul>
          </div>
              ))}
      </div>
    </div>
  )
}
