import { useAppDispatch } from '../hooks/store'
import { filterByEyeColor, filterByGender, reset } from '../redux/characterReducer/character.slice'
import './Filters.css'

export default function Filters() {
  const dispatch = useAppDispatch()

  const handleGenderFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterByGender(event.target.value))
  }

  const handleEyeColorFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterByEyeColor(event.target.value))
  }

  const handleClick = () => {
    document.getElementById('genderFilter').selectedIndex = 0
    document.getElementById('eyeFilter').selectedIndex = 0
    dispatch(reset())
  }

  return (
    <div className='container'>
      <select className='filters' name="gender" id="genderFilter" onChange={handleGenderFilter}>
        <option hidden>Filter by gender...</option>
        <option value="all">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="n/a">N/A</option>
      </select>
      <select className='filters' name="eye_color" id="eyeFilter" onChange={handleEyeColorFilter}>
        <option hidden>Filter by eye color...</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="red">Red</option>
        <option value="brown">Brown</option>
        <option value="blue-gray">Blue-gray</option>
        <option value="black">Black</option>
        <option value="orange">Orange</option>
        <option value="hazel">Hazel</option>
        <option value="pink">Pink</option>
        <option value="unknown">Unknown</option>
        <option value="gold">Gold</option>
        <option value="green, yellow">Green,yellow</option>
        <option value="white">White</option>
      </select>
      <button onClick={handleClick}>Reset filters</button>
    </div>
  )
}
