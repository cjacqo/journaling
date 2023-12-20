import PropTypes from 'prop-types'
import Cell from './Cell'

const CalendarDays = ({ numDays, preceedingDays, remainingDays, handleClickDate }) => {
  return (
    <>
      {/* Loop preceeding days to make empty cells */}
      { Array.from({length: preceedingDays}).map((_, i) => <Cell key={i} />) }
      {/* Loop number of days in month */}
      { Array.from({length: numDays}).map((_, i) => <Cell key={i} onClick={() => handleClickDate(i + 1)}>{i + 1}</Cell>) }
      {/* Loop remaining days to make empty cells */}
      { Array.from({length: remainingDays}).map((_, i) => <Cell key={i} />) }
    </>
  )
}

CalendarDays.propTypes = {
  numDays: PropTypes.number.isRequired,
  preceedingDays: PropTypes.number.isRequired,
  remainingDays: PropTypes.number.isRequired,
  handleClickDate: PropTypes.func
}

export default CalendarDays