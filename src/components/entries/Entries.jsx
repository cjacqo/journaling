import PropTypes from 'prop-types'
import { EntriesList } from './entriesComponents'

const Entries = ({ entries, currentDate, selectedDay }) => {
  return (
    <div>
      {/* Display a list of the entries */}
      <EntriesList
        entries={entries}
        currentDate={currentDate}
        selectedDay={selectedDay} />
      
    </div>
  )
  
}

Entries.propTypes = {
  entries: PropTypes.array.isRequired,
  currentDate: PropTypes.object.isRequired,
  selectedDay: PropTypes.object.isRequired
}

export default Entries