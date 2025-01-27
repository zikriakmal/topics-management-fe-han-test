import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import Context from './context'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TopicsPage from './pages/TopicsPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const navigate = useNavigate();
  const [lang, setLang] = useState<string>("");

  const { i18n } = useTranslation();

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') ?? "en");
    if (localStorage.getItem('isLoggedIn') === "true") {
      setIsLoggedIn(true);
      setAccessToken(localStorage.getItem('accessToken') ?? "")
    }
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  const changeLanguage = (lng: string) => {
    localStorage.setItem('lang', lng);
    i18n.changeLanguage(lng);
    setLang(lng)
  };

  const changeLoggedInState = (isLoggedIn: boolean) => {
    localStorage.setItem('isLoggedIn', isLoggedIn ? "true" : "false");
    setIsLoggedIn(isLoggedIn)
  };

  return (
    <Context.Provider value={{
      lang,
      setLang: changeLanguage,
      isLoggedIn,
      setIsLoggedIn: changeLoggedInState,
      accessToken,
      setAccessToken
    }}>
      <Routes>
        {isLoggedIn ?
          <>
            <Route path='/' index element={<TopicsPage />} />
          </> :
          <>
            <Route path='/' index element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </>
        }
      </Routes>
    </Context.Provider>

  )
}


export default App
