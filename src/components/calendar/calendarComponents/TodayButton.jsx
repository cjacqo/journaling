import PropTypes from 'prop-types'
import Button from '../../buttons/Button'

const TodayButton = ({ setCurrentDate, setSelectedDay }) => {
  const clickHandler = () => {
    const date = new Date()
    setCurrentDate(date)
    setSelectedDay(date)
  }
  
  return (
    <Button clickHandler={clickHandler} text='Today' />
  )
}

TodayButton.propTypes = {
  setCurrentDate: PropTypes.func.isRequired,
  setSelectedDay: PropTypes.func.isRequired
}

export default TodayButton