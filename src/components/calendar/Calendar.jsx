import PropTypes from 'prop-types'
import { CalendarDays, Cell } from './calendarComponents'

const Calendar = ({ currentDate, setCurrentDate }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

  console.log(currentDate)
  console.log(setCurrentDate)

  return (
    <div className='w-[400px] border-t border-l'>
      <div className='grid grid-cols-7 items-center justify-center text-center'>
        {/* Calendar Header */}
        <Cell>{'<<'}</Cell>
        <Cell>{'<'}</Cell>
        <Cell className='col-span-3'>December 2023</Cell>
        <Cell>{'>'}</Cell>
        <Cell>{'>>'}</Cell>

        {/* Loop over daysOfWeek to make cells */}
        { daysOfWeek.map((day, i) => <Cell key={i} className='text-sm font-bold'>{day}</Cell>) }
        
        {/* Calendar Days */}
        <CalendarDays />
      </div>
    </div>
  )
}

Calendar.propTypes = {
  currentDate: PropTypes.object.isRequired,
  setCurrentDate: PropTypes.func.isRequired
}

export default Calendar