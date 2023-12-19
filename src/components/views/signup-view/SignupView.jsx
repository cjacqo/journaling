import { useState } from 'react'
import Form from '../../form/Form'

const SignupView = () => {
  // State values for values of input fields
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    // Set state values to a data object
    const data = {
      FirstName: firstname,
      LastName: lastname,
      UserName: username,
      Password: password,
      Email: email
    }

    // Fetch signup route from API
    fetch('https://journaling-api-7a082617967a.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          alert('Signup successful')
          window.location.reload()
        } else alert('Signup failed')
      })
      .catch(err => alert('Something went wrong: ' + err))
  }

  const inputs = [
    {
      htmlFor: 'firstnameControl',
      label: 'First Name',
      type: 'text',
      value: firstname,
      changeHandler: setFirstname,
      required: true
    },
    {
      htmlFor: 'lastnameControl',
      label: 'Last Name',
      type: 'text',
      value: lastname,
      changeHandler: setLastname,
      required: true
    },
    {
      htmlFor: 'usernameControl',
      label: 'Username',
      type: 'text',
      value: username,
      changeHandler: setUsername,
      required: true
    },
    {
      htmlFor: 'passwordControl',
      label: 'Password',
      type: 'password',
      value: password,
      changeHandler: setPassword,
      required: true
    },
    {
      htmlFor: 'emailControl',
      label: 'Email',
      type: 'email',
      value: email,
      changeHandler: setEmail,
      required: true
    },
  ]
  
  return (
    <Form
      formType='signup'
      title='Signup'
      handleSubmit={handleSubmit}
      inputs={inputs}
      buttonText='Submit' />
  )
}

export default SignupView