import PropTypes from 'prop-types'
import { differenceInDays, endOfMonth, format, setDate, startOfMonth } from 'date-fns'
import { CalendarDays, CalendarDaysOfWeek, CalendarHeader, TodayButton } from './calendarComponents'

const Calendar = ({ currentDate, selectedDay, setCurrentDate, setSelectedDay }) => {
  const startDate = startOfMonth(currentDate)
  const endDate = endOfMonth(currentDate)
  const numDays = differenceInDays(endDate, startDate) + 1
  const preceedingDays = startDate.getDay()
  const remainingDays = 6 - endDate.getDay()

  // Returns a boolean that is passed to CalendarDays to set active cell if true
  const currentMonthIsSelectedMonth = format(currentDate, 'LLLL yyyy') === format(selectedDay, 'LLLL yyyy')

  // Sets the selectedDay by the user for use in setting the active cell in the CalendarDays
  const handleClickDate = (day) => setSelectedDay(setDate(currentDate, day))

  return (
    <div>
      <TodayButton setCurrentDate={setCurrentDate} setSelectedDay={setSelectedDay} />
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