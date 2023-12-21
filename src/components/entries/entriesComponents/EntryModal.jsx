import { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from '../../modal/Modal'
import { format } from 'date-fns'
import Form from '../../form/Form'

const EntryModal = ({ entry, modalOpen, setModalOpen }) => {
  const { Title, Content, CreatedAt } = entry
  // Form Values
  const [title, setTitle] = useState(Title)
  const [content, setContent] = useState(Content)
  const [createdAt, setCreatedAt] = useState(CreatedAt)

  const handleSubmit = () => {
    console.log('Entry updated!')
  }

  const inputs = [
    {
      htmlFor: 'titleControl',
      label: 'Title',
      type: 'text',
      value: title,
      changeHandler: setTitle,
      required: true
    },
    {
      htmlFor: 'contentControl',
      label: 'Content',
      type: 'textarea',
      value: content,
      changeHandler: setContent,
      required: true
    },
    {
      htmlFor: 'createdAtControl',
      label: 'Created At',
      type: 'date',
      value: createdAt,
      changeHandler: setCreatedAt,
      required: true
    }
  ]

  return (
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <Form
        formType='updateEntry'
        title='Update Entry'
        handleSubmit={handleSubmit}
        inputs={inputs}
        buttonText='Update' />
    </Modal>
  )
}

EntryModal.propTypes = {
  entry: PropTypes.object,
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired
}

export default EntryModal