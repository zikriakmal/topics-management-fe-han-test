import { Route, Routes } from 'react-router'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {

  return (
    <Routes>
      <Route index element={<LoginPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>
      <Route path='/topics' index element={<RegisterPage />}></Route>
    </Routes>
  )
}

export default App
