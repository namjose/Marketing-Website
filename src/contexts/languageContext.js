import React, { useState, useEffect } from 'react'

export const LanguageContext = React.createContext()

export const LanguageContextProvider = props => {
  const localLanguage = localStorage.getItem('language') || 'vn'
  const [language, setLanguage] = useState(localLanguage)

  const changeLanguage = newLanguage => {
    setLanguage(newLanguage)
  }

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}
