import PropTypes from 'prop-types'
import Calendar from '../../calendar/Calendar'
import Entries from '../../entries/Entries'

const HomeView = ({
  entries,
  currentDate,
  selectedDay,
  setCurrentDate,
  setSelectedDay }) => {
  return (
    <div>
      <Calendar
        currentDate={currentDate}
        selectedDay={selectedDay}
        setCurrentDate={setCurrentDate}
        setSelectedDay={setSelectedDay} />
      <Entries
        entries={entries}
        currentDate={currentDate}
        selectedDay={selectedDay} />
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