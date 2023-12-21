import PropTypes from 'prop-types'

const Entry = ({ entry }) => {
  const { Title, Content } = entry
  return (
    <div>
      <h3>{Title}</h3>
      <p>{Content}</p>
    </div>
  )
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired
}

export default Entry