import { useState } from 'react'
import PropTypes from 'prop-types'
import { EntriesList, EntryModal } from './entriesComponents'

const Entries = ({ entries, currentDate, selectedDay }) => {
  const [selectedEntry, setSelectedEntry] = useState({})
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      {/* Display a list of the entries */}
      <EntriesList
        entries={entries}
        currentDate={currentDate}
        selectedDay={selectedDay}
        setSelectedEntry={setSelectedEntry}
        setModalOpen={setModalOpen} />
      
      {/* Modal for a selected entry */}
      { modalOpen && <EntryModal entry={selectedEntry} setModalOpen={setModalOpen} /> }
    </div>
  )
  
}

Entries.propTypes = {
  entries: PropTypes.array.isRequired,
  currentDate: PropTypes.object.isRequired,
  selectedDay: PropTypes.object.isRequired
}

export default Entries