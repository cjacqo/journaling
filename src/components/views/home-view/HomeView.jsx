import PropTypes from 'prop-types'
import Calendar from '../../calendar/Calendar'

const HomeView = ({
  entries,
  currentDate,
  selectedDay,
  setCurrentDate,
  setSelectedDay }) => {
  console.log(entries)
  return (
    <div>
      <Calendar
        currentDate={currentDate}
        selectedDay={selectedDay}
        setCurrentDate={setCurrentDate}
        setSelectedDay={setSelectedDay} />
    </div>
  )
}

HomeView.propTypes = {
  entries: PropTypes.array.isRequired,
  currentDate: PropTypes.object.isRequired,
  selectedDay: PropTypes.object.isRequired,
  setCurrentDate: PropTypes.func.isRequired,
  setSelectedDay: PropTypes.func.isRequired
}

export default HomeView