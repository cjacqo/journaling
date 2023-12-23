import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ user, onLoggedOut }) => {
  return (
    <nav className='w-full bg-slate-100 p-4 flex justify-end items-center'>
      <div className='flex gap-4 items-center'>
        {!user && (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </>
        )}
        {user && (
          <>
            <FontAwesomeIcon icon={faGear} />
            <Link onClick={onLoggedOut}>Logout</Link>
          </>
        )}
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  onLoggedOut: PropTypes.func.isRequired
}

export default Navbar