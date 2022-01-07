import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

type ThemeContext = {
  theme: Theme
  changeTheme: (newTheme: Theme) => void
}

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return Theme.LIGHT
  }

  const storedTheme = window.localStorage.getItem('color-theme') as Theme | null

  if (storedTheme) {
    return storedTheme
  }

  return Theme.LIGHT
}

const storeTheme = (theme: Theme) => {
  const root = window.document.documentElement
  const isDark = theme === Theme.DARK

  root.classList.remove(isDark ? Theme.LIGHT : Theme.DARK)
  root.classList.add(theme)

  localStorage.setItem('color-theme', theme)
}

const ThemeContext = createContext<ThemeContext>({
  theme: Theme.LIGHT,
  changeTheme: () => {},
})

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(Theme.LIGHT)
  const mounted = useRef(false)

  const changeTheme = useCallback((newTheme: Theme) => setTheme(newTheme), [])

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      setTheme(getInitialTheme())

      return
    }

    storeTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext<ThemeContext>(ThemeContext)

export const useTheme = () => {
  const { theme } = useThemeContext()

  const isDark = theme === Theme.DARK
  const isLight = theme === Theme.LIGHT

  return useMemo(
    () => ({
      theme,
      isDark,
      isLight,
    }),
    [theme, isDark, isLight]
  )
}

export const useThemeApi = () => {
  const { theme, changeTheme } = useThemeContext()

  const setLightTheme = useCallback(
    () => changeTheme(Theme.LIGHT),
    [changeTheme]
  )
  const setDarkTheme = useCallback(() => changeTheme(Theme.DARK), [changeTheme])
  const toggleTheme = useCallback(() => {
    const isDark = Theme.DARK === theme
    const newTheme = isDark ? Theme.LIGHT : Theme.DARK

    changeTheme(newTheme)
  }, [theme, changeTheme])

  return useMemo(
    () => ({
      setLightTheme,
      setDarkTheme,
      toggleTheme,
    }),
    [setLightTheme, setDarkTheme, toggleTheme]
  )
}
