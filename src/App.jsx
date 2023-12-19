import './App.css'
import LoginView from './components/login-view/LoginView'
import SignupView from './components/signup-view/SignupView'

function App() {

  return (
    <>
      <LoginView onLoggedIn={() => console.log('logged in')} />
      <SignupView onLoggedIn={() => console.log('signed up')} />
    </>
  )
}

export default App
