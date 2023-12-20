import PropTypes from 'prop-types'
import { add, differenceInDays, endOfMonth, format, startOfMonth, sub } from 'date-fns'
import { CalendarDays, Cell } from './calendarComponents'

const Calendar = ({ currentDate, setCurrentDate }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
  const startDate = startOfMonth(currentDate)
  const endDate = endOfMonth(currentDate)
  const numDays = differenceInDays(endDate, startDate) + 1
  const preceedingDays = startDate.getDay()
  const remainingDays = 6 - endDate.getDay()

  const prevMonth = () => setCurrentDate(sub(currentDate, { months: 1 }))
  const prevYear = () => setCurrentDate(sub(currentDate, { years: 1 }))

  const nextMonth = () => setCurrentDate(add(currentDate, { months: 1 }))
  const nextYear = () => setCurrentDate(add(currentDate, { years: 1 }))
  
  return (
    <div className='w-[400px] border-t border-l'>
      <div className='grid grid-cols-7 items-center justify-center text-center'>
        {/* Calendar Header */}
        <Cell onClick={prevYear}>{'<<'}</Cell>
        <Cell onClick={prevMonth}>{'<'}</Cell>
        <Cell className='col-span-3'>{format(currentDate, 'LLLL yyyy')}</Cell>
        <Cell onClick={nextMonth}>{'>'}</Cell>
        <Cell onClick={nextYear}>{'>>'}</Cell>

        {/* Loop over daysOfWeek to make cells */}
        { daysOfWeek.map((day, i) => <Cell key={i} className='text-sm font-bold'>{day}</Cell>) }
        
        {/* Calendar Days */}
        <CalendarDays
          numDays={numDays}
          preceedingDays={preceedingDays}
          remainingDays={remainingDays} />
      </div>
    </div>
  )
}

Calendar.propTypes = {
  currentDate: PropTypes.object.isRequired,
  setCurrentDate: PropTypes.func.isRequired
}

export default Calendar