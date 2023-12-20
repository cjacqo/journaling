import PropTypes from 'prop-types'
import { differenceInDays, endOfMonth, startOfMonth } from 'date-fns'
import { CalendarDays, CalendarHeader, Cell } from './calendarComponents'

const Calendar = ({ currentDate, setCurrentDate }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
  const startDate = startOfMonth(currentDate)
  const endDate = endOfMonth(currentDate)
  const numDays = differenceInDays(endDate, startDate) + 1
  const preceedingDays = startDate.getDay()
  const remainingDays = 6 - endDate.getDay()
  
  return (
    <div className='w-[400px] border-t border-l'>
      <div className='grid grid-cols-7 items-center justify-center text-center'>
        {/* Calendar Header */}
        <CalendarHeader
          currentDate={currentDate}
          setCurrentDate={setCurrentDate} />

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