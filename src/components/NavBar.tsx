import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar () {
  return (
    <div className='navContainer'>
      <Link to='/characters'><button>Go to Characters</button></Link>
      <Link to='/'><button>Go to films</button></Link>
    </div>
  )
}
