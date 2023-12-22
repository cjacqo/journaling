import { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from '../../modal/Modal'
import Form from '../../form/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const EntryModal = ({ entry, modalOpen, setModalOpen, fetchUserEntries }) => {
  const { Title, Content, CreatedAt } = entry
  // Form Values
  const [title, setTitle] = useState(Title)
  const [content, setContent] = useState(Content)
  const [createdAt, setCreatedAt] = useState(CreatedAt)

  const handleSubmit = () => {
    // Set state values to a data object
    const data = {
      Title: title,
      Content: content
    }

    // Fetch the entry route from API
    fetch(`https://journaling-api-7a082617967a.herokuapp.com/entries/${entry._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(data => {
        if (data) {
          fetchUserEntries()
          setModalOpen(false)
        }
      })
      .catch(err => alert('Something went wrong: ' + err))
  }

  const handleDelete = () => {
    // Fetch the entry route from API
    fetch(`https://journaling-api-7a082617967a.herokuapp.com/entries/${entry._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      if (res.ok) res.json()
      else alert('Something went wrong')
    })
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
      <button className="bg-red-500 mt-5" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </Modal>
  )
}

EntryModal.propTypes = {
  entry: PropTypes.object,
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  fetchUserEntries: PropTypes.func.isRequired
}

export default EntryModal