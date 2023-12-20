import PropTypes from 'prop-types'

const CalendarDirectionButton = ({ icon }) => {
  return (
    <div className='calendar-direction--button btn'>
      {icon}
    </div>
  )
}

CalendarDirectionButton.propTypes = {
  icon: PropTypes.string.isRequired
}

export default CalendarDirectionButton