import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../modal/Modal'
import { format } from 'date-fns'

const EntryModal = ({ entry, setModalOpen }) => {
  const { Title, Content, CreatedAt } = entry
  return (
    <Modal
      className='h-100'
      setModalOpen={setModalOpen}>
      <h2 className='text-xl'>{Title}</h2>
      <p>{Content}</p>
      <p>{format(CreatedAt, 'LLL dd yyyy')}</p>
    </Modal>
  )
}

EntryModal.propTypes = {
  entry: PropTypes.object,
  setModalOpen: PropTypes.func.isRequired
}

export default EntryModal