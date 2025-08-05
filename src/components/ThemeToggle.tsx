import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import Button from './Button'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  // Detectar y aplicar el tema desde el sistema/localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = storedTheme === 'dark' || (!storedTheme && prefersDark)

    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  // Escuchar cambios de preferencia del sistema en vivo (opcional pero pro)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches)
        document.documentElement.classList.toggle('dark', e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newMode)
  }

  return (
    <Button
      onClick={toggleTheme}
      className="p-2 rounded-full border transition-colors duration-300 text-[var(--text-color)] border-gray-300"
      aria-label="Cambiar tema"
    >
      {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
    </Button>
  )
}

export default ThemeToggle
