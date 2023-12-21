import PropTypes from 'prop-types'
import clsx from 'clsx'

const Modal = ({ children, className, modalOpen, setModalOpen }) => {
  return (
    <div
      aria-hidden='true'
      id='popup-modal'
      className={clsx(
        'fixed inset-0 flex justify-center items-center',
        `transition-colors ${modalOpen ? 'visible bg-black/20' : 'invisible'}`,
        className)}
      onClick={() => setModalOpen(false)}>
      <div
        onClick={e => e.stopPropagation()}
        className={`
          relative bg-blue-300 rounded-xl shadow p-6 h-[400px] w-[400px]
          transition-all ${modalOpen ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}
        `}>
        <button
          onClick={() => setModalOpen(false)}
          className='absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>
            X
        </button>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired
}

export default Modal