import './App.css'
import { Route, Routes } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="login" element={<LoginPage />}/>
        <Route path="" element={<WelcomePage />}/>
        <Route path="home" element={<HomePage />}/>
        <Route path="register" element={<RegisterPage />}/>
      </Route>
    </Routes>
  )
}

export default App
