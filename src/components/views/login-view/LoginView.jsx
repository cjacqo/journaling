import { useState } from 'react'
import PropTypes from 'prop-types'
import Form from '../../form/Form'
import NavigateButton from '../../buttons/NavigateButton'

const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    // Set state values to a data object
    const data = {
      UserName: username,
      Password: password
    }

    // Fetch login route from API
    fetch('https://journaling-api-7a082617967a.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        // If user exists, set local storage items
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user))
          localStorage.setItem('token', data.token)
          // Set user and token to authorize access
          onLoggedIn(data.user, data.token)
        } else alert('No such user')
      })
      .catch(err => alert('Something went wrong: ' + err))
  }

  const inputs = [
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
    }
  ]

  return (
    <>
      <Form
        formType='login'
        title='Login'
        handleSubmit={handleSubmit}
        inputs={inputs}
        buttonText='Submit' />
      <NavigateButton
        route='signup'
        text='Don&apos;t have an account?'
        link='Sign up!' />
    </>
  )
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired
}

export default LoginView