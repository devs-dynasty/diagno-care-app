import { Routes, Route } from 'react-router-dom'
import {Home, LoginPage, SignupPage }  from './pages/index'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
}

export default App
