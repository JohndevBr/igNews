import { createContext, ReactNode, useContext, useState } from "react";

interface LanguageProviderProps {
  children: ReactNode
}

interface LanguageContextProps {
  language: string
  selectLanguage: (state: "pt" | "en") => void
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export function LanguageProvider({children}: LanguageProviderProps) {
  const [ language, setLanguage ] = useState("pt")

  function selectLanguage(state: "pt" | "en"){
    setLanguage(state)
  }
  
  return (
    <LanguageContext.Provider value={{ language, selectLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  return context
}