import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavigateButton = ({ route, text, link }) => {
  return (
    <div className="navigate-btn--container text-center">
      <span className="navigate-btn--text">{text}</span>
      &nbsp;
      <Link to={`/${route}`}>
        {link}
      </Link>
    </div>
  )
}

NavigateButton.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default NavigateButton