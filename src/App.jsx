/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomeView, LoginView, SignupView } from './components/views'

function App() {
  // Look for items in local storage
  const storedUser = JSON.parse(localStorage.getItem('user'))
  const storedToken = localStorage.getItem('token')
  // State values for user and token if in local storage or set to null
  const [user, setUser] = useState(storedUser ? storedUser : null)
  const [token, setToken] = useState(storedToken ? storedToken : null)
  // State values for user entries
  const [entries, setEntries] = useState([])

  // Fetch entries for the user
  useEffect(() => {
    if (!token) return 
    fetchUserEntries()
  }, [token])

  const fetchUserEntries = () => {
    fetch('https://journaling-api-7a082617967a.herokuapp.com/entries', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setEntries(data)
      })
      .catch(err => console.error(err))
  }
  
  return (
    <BrowserRouter>
      <Routes>
        {/* SIGNUP ROUTE */}
        <Route
          path='/signup'
          element={
            <>
              {
                user ? (
                  <Navigate to='/' />
                ) : (
                  <SignupView />
                )
              }
            </>
          }
        />
        {/* LOGIN ROUTE */}
        <Route
          path='/login'
          element={
            <>
              {
                user ? (
                  <Navigate to='/' />
                ) : (
                  <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token); }} />
                )
              }
            </>
          }
        />
        {/* HOME ROUTE */}
        <Route
          path='/'
          element={
            <>
              {
                !user ? (
                  <Navigate to='/signup' replace />
                ) : (
                  <HomeView entries={entries} />
                )
              }
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
