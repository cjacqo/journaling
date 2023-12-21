import PropTypes from 'prop-types'
import { differenceInDays, endOfMonth, format, setDate, startOfMonth } from 'date-fns'
import { CalendarDays, CalendarDaysOfWeek, CalendarHeader } from './calendarComponents'

const Calendar = ({ currentDate, selectedDay, setCurrentDate, setSelectedDay }) => {
  const startDate = startOfMonth(currentDate)
  const endDate = endOfMonth(currentDate)
  const numDays = differenceInDays(endDate, startDate) + 1
  const preceedingDays = startDate.getDay()
  const remainingDays = 6 - endDate.getDay()

  const currentMonthIsSelectedMonth = format(currentDate, 'LLLL yyyy') === format(selectedDay, 'LLLL yyyy')

  const handleClickDate = (day) => setSelectedDay(setDate(currentDate, day))

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
          selectedDay={selectedDay}
          numDays={numDays}
          preceedingDays={preceedingDays}
          remainingDays={remainingDays}
          handleClickDate={handleClickDate}
          isCurrentMonthSelectedMonth={currentMonthIsSelectedMonth} />
      </div>
    </div>
  )
}

Calendar.propTypes = {
  currentDate: PropTypes.object.isRequired,
  selectedDay: PropTypes.object.isRequired,
  setCurrentDate: PropTypes.func.isRequired,
  setSelectedDay: PropTypes.func.isRequired
}

export default Calendar