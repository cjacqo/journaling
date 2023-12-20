import PropTypes from 'prop-types'
import { add, sub, format } from 'date-fns'
import Cell from './Cell'

const CalendarHeader = ({ currentDate, setCurrentDate }) => {
  const prevMonth = () => setCurrentDate(sub(currentDate, { months: 1 }))
  const prevYear = () => setCurrentDate(sub(currentDate, { years: 1 }))

  const nextMonth = () => setCurrentDate(add(currentDate, { months: 1 }))
  const nextYear = () => setCurrentDate(add(currentDate, { years: 1 }))
  return (
    <>
      <Cell onClick={prevYear}>{'<<'}</Cell>
      <Cell onClick={prevMonth}>{'<'}</Cell>
      <Cell className='col-span-3'>{format(currentDate, 'LLLL yyyy')}</Cell>
      <Cell onClick={nextMonth}>{'>'}</Cell>
      <Cell onClick={nextYear}>{'>>'}</Cell>
    </>
  )
}

CalendarHeader.propTypes = {
  currentDate: PropTypes.object.isRequired,
  setCurrentDate: PropTypes.func.isRequired
}

export default CalendarHeader