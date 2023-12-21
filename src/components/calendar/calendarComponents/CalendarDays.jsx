import PropTypes from 'prop-types'
import Cell from './Cell'
import { format } from 'date-fns'

const CalendarDays = ({
  selectedDay,
  numDays,
  preceedingDays,
  remainingDays,
  handleClickDate,
  isCurrentMonthSelectedMonth }) => {

  const currentDay = parseInt(format(selectedDay, 'd'))

  return (
    <>
      {/* Loop preceeding days to make empty cells */}
      { Array.from({length: preceedingDays}).map((_, i) => <Cell key={i} />) }
      {/* Loop number of days in month */}
      { Array.from({length: numDays}).map((_, i) => (
        <Cell
          key={i}
          onClick={() => handleClickDate(i + 1)}
          className={isCurrentMonthSelectedMonth && currentDay === i + 1 ? 'bg-gray-100 text-black' : ''}>
            {i + 1}
        </Cell>
      ))}
      {/* Loop remaining days to make empty cells */}
      { Array.from({length: remainingDays}).map((_, i) => <Cell key={i} />) }
    </>
  )
}

CalendarDays.propTypes = {
  selectedDay: PropTypes.object.isRequired,
  numDays: PropTypes.number.isRequired,
  preceedingDays: PropTypes.number.isRequired,
  remainingDays: PropTypes.number.isRequired,
  handleClickDate: PropTypes.func,
  isCurrentMonthSelectedMonth: PropTypes.bool.isRequired
}

export default CalendarDays