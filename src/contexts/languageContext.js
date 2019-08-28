import React, { useState } from 'react'

export const LanguageContext = React.createContext()

export const LanguageContextProvider = props => {
  const [language, setLanguage] = useState('vn')
  const changeLanguage = newLanguage => {
    setLanguage(newLanguage)
  }
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}
