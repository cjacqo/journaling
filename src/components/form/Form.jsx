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
  
  const inputClasses = `
    bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
    focus:ring-blue-500 focus:border-blue-500
    block w-full p-2.5
    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
  `

  return (
    <div className="flex flex-col justify-start items-start mb-3">
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor={htmlFor}>{`${label}:`}</label>
      {
        type === 'textarea' ? (
          <textarea
            className={inputClasses + ' resize-none'}
            id={htmlFor}
            placeholder={`${label}...`}
            value={value}
            onChange={e => changeHandler(e.target.value)}
            required={required} />
        ) : (
          <input
            type={type}
            className={inputClasses}
            id={htmlFor}
            placeholder={`${label}...`}
            value={type === 'date' ? new Date(value).toISOString().split('T')[0] : value}
            onChange={e => changeHandler(e.target.value)}
            required={required} />
        )
      }
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
    <div className={`form--container ${formType} flex flex-col justify-center items-center h-1/2`}>
      <div className="form-title--container py-4">
        <h1 className='text-lg font-bold'>{title}</h1>
      </div>

      <form onSubmit={submitHandler} className={`max-w-sm mx-auto w-full ${formType}`}>
        {
          inputs.map((input, i) => (
            <FormInput key={i} input={input} />
          ))
        }
        <div className="form-button--container text-center mt-5">
          <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>{buttonText}</button>
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