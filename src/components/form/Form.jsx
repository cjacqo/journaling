import PropTypes from 'prop-types'

/**
 * 
 * @param {object} input Object with data for the form input
 * @returns React component
 */
const FormInput = ({ input }) => {
  const {
    htmlFor,
    label,
    type,
    value,
    changeHandler,
    required
  } = input

  return (
    <div className="form-control">
      <label htmlFor={htmlFor}>{`${label}:`}</label>
      <input
        type={type}
        className='form-input'
        id={htmlFor}
        placeholder={`${label}...`}
        value={value}
        onChange={e => changeHandler(e.target.value)}
        required={required} />
    </div>
  )
}

FormInput.propTypes = {
  input: PropTypes.object.isRequired
}

/**
 * 
 * @param {string} formType Used for the class names of various HTML elements
 * @param {string} title Title of the form
 * @param {function} handleSubmit Function that processes and handles the submission
 * @param {array} inputs Array of objects that is an input
 * @param {string} buttonText Text for the button 
 * @returns React form component
 */
const Form = ({
  formType,
  title,
  handleSubmit,
  inputs,
  buttonText
}) => {

  const submitHandler = e => {
    e.preventDefault()
    handleSubmit()
  }
  
  return (
    <div className={`form--container ${formType}`}>
      <div className="form-title--container">
        <h1>{title}</h1>
      </div>

      <form onSubmit={submitHandler} className={`form ${formType}`}>
        {
          inputs.map((input, i) => (
            <FormInput key={i} input={input} />
          ))
        }
        <div className="form-button--container">
          <button type='submit' className='btn'>{buttonText}</button>
        </div>
      </form>
    </div>
  )
}

Form.propTypes = {
  formType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default Form