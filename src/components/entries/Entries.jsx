import PropTypes from 'prop-types'
import { format } from 'date-fns'
import { EntriesList } from './entriesComponents'

const Entries = ({ entries, currentDate, selectedDay }) => {
  const isCurrentAndSelectedDateSameAsEntry = (entryDate) => {
    const currentMonthAndYear = format(currentDate, 'LLLL yyyy')
    const selectedMonthAndYear = format(selectedDay, 'LLLL yyyy')
    const selectedDayFormat = format(selectedDay, 'LLLL dd yyyy')
    const entryDateFormat = format(new Date(entryDate), 'LLLL dd yyyy')

    return currentMonthAndYear === selectedMonthAndYear && selectedDayFormat === entryDateFormat
  }
  return (
    <div>
      {/* Display a list of the entries */}
      <EntriesList
        entries={entries}
        showEntries={isCurrentAndSelectedDateSameAsEntry} />
      
      {/* {
        entries.map(entry => {
          if (isCurrentAndSelectedDateSameAsEntry(entry.CreatedAt)) {
            return <Entry key={entry._id} entry={entry} />
          }
        })
      } */}
    </div>
  )
  
}

Entries.propTypes = {
  entries: PropTypes.array.isRequired,
  currentDate: PropTypes.object.isRequired,
  selectedDay: PropTypes.object.isRequired
}

export default Entries