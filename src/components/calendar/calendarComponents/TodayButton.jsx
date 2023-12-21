import PropTypes from 'prop-types'
import Button from '../../buttons/Button'

const TodayButton = ({ setCurrentDate, setSelectedDay }) => {
  const clickHandler = () => {
    const date = new Date()
    setCurrentDate(date)
    setSelectedDay(date)
  }
  
  return (
    <Button
      className='my-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
      clickHandler={clickHandler}
      text='Today' />
  )
}

TodayButton.propTypes = {
  setCurrentDate: PropTypes.func.isRequired,
  setSelectedDay: PropTypes.func.isRequired
}

export default TodayButton