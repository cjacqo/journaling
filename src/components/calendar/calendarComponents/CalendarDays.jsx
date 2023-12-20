import PropTypes from 'prop-types'
import Cell from "./Cell"

const CalendarDays = ({ numDays, preceedingDays }) => {
  return (
    <>
      {/* Loop preceeding days to make empty cells */}
      { Array.from({length: preceedingDays}).map((_, i) => <Cell key={i} />) }
      {/* Loop number of days in month */}
      { Array.from({length: numDays}).map((_, i) => <Cell key={i}>{i + 1}</Cell>) }
    </>
  )
}

CalendarDays.propTypes = {
  numDays: PropTypes.number.isRequired,
  preceedingDays: PropTypes.number.isRequired
}

export default CalendarDays