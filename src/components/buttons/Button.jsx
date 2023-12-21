import PropTypes from 'prop-types'
import clsx from 'clsx'

const Button = ({ className, clickHandler, text }) => {
  return (
    <button
      className={clsx(
        'px-4 py-1 rounded text-white',
        className
      )}
      onClick={clickHandler}>
        {text}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button