/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomeView, LoginView, SignupView } from './components/views'

function App() {
  // Look for items in local storage
  const storedUser = JSON.parse(localStorage.getItem('user'))
  const storedToken = localStorage.getItem('token')
  const storedDate = localStorage.getItem('date')
  const storedSelectedDay = localStorage.getItem('selectedDay')
  // State values for user and token if in local storage or set to null
  const [user, setUser] = useState(storedUser ? storedUser : null)
  const [token, setToken] = useState(storedToken ? storedToken : null)
  // State values for user entries
  const [entries, setEntries] = useState([])
  // Current date set
  const [currentDate, setCurrentDate] = useState(storedDate ? new Date(storedDate) : new Date())
  const [selectedDay, setSelectedDay] = useState(storedSelectedDay ? new Date(storedSelectedDay) : new Date())

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

  // Handle the change for the current date and set the localStorage item for date
  const handleDateChange = (date) => {
    localStorage.setItem('date', date)
    setCurrentDate(date)
  }

  // Handle selected day of the calendar
  const handleSelectedDay = (day) => {
    localStorage.setItem('selectedDay', new Date(day))
    setSelectedDay(day)
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
                  <HomeView
                    entries={entries}
                    currentDate={currentDate}
                    selectedDay={selectedDay}
                    setCurrentDate={handleDateChange}
                    setSelectedDay={handleSelectedDay}
                    fetchUserEntries={fetchUserEntries} />
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
