import './App.css'
import { LoginView, SignupView } from './components/views'

function App() {

  return (
    <>
      <LoginView onLoggedIn={() => console.log('logged in')} />
      <SignupView onLoggedIn={() => console.log('signed up')} />
    </>
  )
}

export default App
