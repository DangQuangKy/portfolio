import { createContext, ReactNode, useContext, useState } from "react"

type ThemeContextType = {
    darkMode: boolean,
    toggleTheme: () => void,
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({children}: {children : ReactNode }) => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        setDarkMode(prev => !prev)
    }
    return (
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context) {
        throw new Error('Theme context not defined')
    }
    return context
}