import React from 'react'
import PropTypes from 'prop-types'
import Calendar from '../../calendar/Calendar'

const HomeView = ({ entries }) => {
  return (
    <div>
      <Calendar />
    </div>
  )
}

HomeView.propTypes = {
  entries: PropTypes.array.isRequired
}

export default HomeView