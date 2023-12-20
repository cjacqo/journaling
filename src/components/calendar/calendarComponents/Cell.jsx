import clsx from 'clsx'
import PropTypes from 'prop-types'

const Cell = ({ className, onClick, children}) => {
  return (
    <div
      className={clsx(
        'h-12 flex items-center justify-center border-b border-r',
        {'hover:bg-gray-100 hover:text-black cursor-pointer': !!onClick},
        className
      )}
      onClick={onClick}>
      {children}
    </div>
  )
}

Cell.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any
}

export default Cell