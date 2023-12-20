import PropTypes from 'prop-types'
import { differenceInDays, endOfMonth, startOfMonth } from 'date-fns'
import { CalendarDays, CalendarDaysOfWeek, CalendarHeader } from './calendarComponents'

const Calendar = ({ currentDate, setCurrentDate }) => {
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

        {/* Days of the Week */}
        <CalendarDaysOfWeek />
        
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