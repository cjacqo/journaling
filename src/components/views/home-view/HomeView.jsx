import PropTypes from 'prop-types'
import Calendar from '../../calendar/Calendar'

const HomeView = ({ entries, currentDate, setCurrentDate }) => {
  console.log(entries)
  return (
    <div>
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
    </div>
  )
}

HomeView.propTypes = {
  entries: PropTypes.array.isRequired,
  currentDate: PropTypes.object.isRequired,
  setCurrentDate: PropTypes.func.isRequired
}

export default HomeView