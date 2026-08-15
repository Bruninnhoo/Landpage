import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Language = 'pt' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  t: (ptText: string, enText: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang')
    return (saved === 'en' || saved === 'pt') ? saved : 'pt'
  })

  useEffect(() => {
    localStorage.setItem('app_lang', lang)
  }, [lang])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
  }

  const toggleLang = () => {
    setLangState((prev) => (prev === 'pt' ? 'en' : 'pt'))
  }

  const t = (ptText: string, enText: string) => {
    return lang === 'en' ? enText : ptText
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
