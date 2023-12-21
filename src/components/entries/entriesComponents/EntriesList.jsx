/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import PropTypes from 'prop-types'

const EntriesList = ({ entries, currentDate, selectedDay }) => {
  const [shownEntries, setShownEntries] = useState([])

  useEffect(() => {
    getEntriesForSelectedDay()
  }, [entries, currentDate, selectedDay])

  const currentMonthAndYear = format(currentDate, 'LLLL yyyy')
  const selectedMonthAndYear = format(selectedDay, 'LLLL yyyy')
  const selectedDayFormat = format(selectedDay, 'LLLL dd yyyy')

  const isCurrentAndSelectedDateSameAsEntry = (entryDate) => {
    const entryDateFormat = format(new Date(entryDate), 'LLLL dd yyyy')
    return currentMonthAndYear === selectedMonthAndYear && selectedDayFormat === entryDateFormat
  }
  
  const getEntriesForSelectedDay = () => {
    setShownEntries(entries.filter(entry => selectedDayFormat === format(new Date(entry.CreatedAt), 'LLLL dd yyyy')))
  }
  return (
    <div className='container mx-auto flex flex-col gap-4 mt-3'>
      {
        entries.length !== 0 && shownEntries.length === 0 ? (
          <div>
            <h3>No entries</h3>
          </div>
        ) : (
          shownEntries.map(entry => {
            if (isCurrentAndSelectedDateSameAsEntry(entry.CreatedAt)) {
              return (
                <div key={entry._id} className='flex justify-between border px-2 py-3 w-100'>
                  <h3>{entry.Title}</h3>
                  <p>{format(entry.CreatedAt, 'LLL dd yyyy')}</p>
                </div>
              )
            }
            
          })
        )
      }
    </div>
  )
}

EntriesList.propTypes = {
  entries: PropTypes.array.isRequired,
  currentDate: PropTypes.object.isRequired,
  selectedDay: PropTypes.object.isRequired
}

export default EntriesList