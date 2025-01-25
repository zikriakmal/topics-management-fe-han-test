import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router'
import './App.css'
import Context from './context'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TopicsPage from './pages/TopicsPage'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [lang, setLang] = useState<string>("");

  const { i18n } = useTranslation();

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') ?? "en");
  }, [])

  const changeLanguage = (lng: string) => {
    localStorage.setItem('lang', lng);
    i18n.changeLanguage(lng);
    setLang(lng)
  };


  return (
    <Context.Provider value={{ lang, setLang: changeLanguage, isLoggedIn, setIsLoggedIn }}>
      <Routes>
        <Route path='/' index element={<TopicsPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
      </Routes>
    </Context.Provider>

  )
}

export default App
