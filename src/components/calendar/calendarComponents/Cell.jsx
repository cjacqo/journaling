import clsx from 'clsx'
import PropTypes from 'prop-types'

const Cell = ({ className, children }) => {
  return (
    <div className={clsx("h-12 flex items-center justify-center border-b border-r", className)}>
      {children}
    </div>
  )
}

Cell.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default Cell