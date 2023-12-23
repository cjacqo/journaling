import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ user, onLoggedOut }) => {
  return (
    <nav>
      {!user && (
        <>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </>
      )}
      {user && (
        <>
          <button>
            <FontAwesomeIcon icon={faGear} />
            <Link onClick={onLoggedOut}>Logout</Link>
          </button>
        </>
      )}
    </nav>
  )
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  onLoggedOut: PropTypes.func.isRequired
}

export default Navbar