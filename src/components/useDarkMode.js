import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('nightmareToken', false)
    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : ''
    }, [darkMode])
    return [darkMode, setDarkMode]
}