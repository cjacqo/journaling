import React from 'react'
import PropTypes from 'prop-types'

const HomeView = ({ entries }) => {
  return (
    <div>HomeView</div>
  )
}

HomeView.propTypes = {
  entries: PropTypes.array.isRequired
}

export default HomeView