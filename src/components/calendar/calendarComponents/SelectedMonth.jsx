import PropTypes from 'prop-types'

const SelectedMonth = ({ month, year }) => {
  return (
    <div className='selected-month'>
      {month}&nbsp;{year}
    </div>
  )
}

SelectedMonth.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
}

export default SelectedMonth