'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react'

const themes = {
  'light-1': {
    primary: '#60a5fa',
    background: '#ffffff',
    text: '#1f2937',
  },
  'light-2': {
    primary: '#34d399',
    background: '#f9fafb',
    text: '#111827',
  },
  'light-3': {
    primary: '#f472b6',
    background: '#f8fafc',
    text: '#0f172a',
  },
  'dark-1': {
    primary: '#3b82f6',
    background: '#1f2937',
    text: '#f9fafb',
  },
  'dark-2': {
    primary: '#10b981',
    background: '#111827',
    text: '#f9fafb',
  },
  'dark-3': {
    primary: '#ec4899',
    background: '#0f172a',
    text: '#f8fafc',
  },
}

const ThemeContext = createContext({ theme: 'light-1', setTheme: (theme: string) => {} })

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light-1')

  useEffect(() => {
    const colors = themes[theme as keyof typeof themes]
    document.documentElement.style.setProperty('--color-primary', colors.primary)
    document.documentElement.style.setProperty('--color-background', colors.background)
    document.documentElement.style.setProperty('--color-text', colors.text)
  }, [theme])

  return (
    <SessionProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </SessionProvider>
  )
}

export const useTheme = () => useContext(ThemeContext)
