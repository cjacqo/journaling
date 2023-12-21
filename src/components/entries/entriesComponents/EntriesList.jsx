import { format } from 'date-fns'
import PropTypes from 'prop-types'

const EntriesList = ({ entries, showEntries }) => {
  return (
    <div className='container mx-auto flex flex-col gap-4 mt-3'>
      {
        entries.map(entry => {
          if (showEntries(entry.CreatedAt)) {
            return (
              <div key={entry._id} className='flex justify-between border px-2 py-3 w-100'>
                <h3>{entry.Title}</h3>
                <p>{format(entry.CreatedAt, 'LLL dd yyyy')}</p>
              </div>
            )
          }
        })
      }
    </div>
  )
}

EntriesList.propTypes = {
  entries: PropTypes.array.isRequired,
  showEntries: PropTypes.func.isRequired
}

export default EntriesList