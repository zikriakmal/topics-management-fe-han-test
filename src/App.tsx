import { Route, Routes } from 'react-router'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { useEffect } from 'react'
import TopicsPage from './pages/TopicsPage'

function App() {

  useEffect(()=>{

  },[]);

  return (
    <Routes>
      <Route path='/' index element={<TopicsPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>
    </Routes>
  )
}

export default App
