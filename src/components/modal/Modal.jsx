import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Modal = ({ children, className, setModalOpen }) => {
  return (
    <div className={clsx('', className)}>
      <button onClick={() => setModalOpen(false)}>X</button>
      {children}
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  setModalOpen: PropTypes.func.isRequired
}

export default Modal