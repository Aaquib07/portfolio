import React, { createContext, useContext, useState } from "react";

// Create a context for the dark mode state
export const DarkModeContext = createContext()

export const useDarkMode = () => {
    useContext(DarkModeContext)
}

export const DarkModeProvider = ({ children }) => {
    // State to hold the current theme
    const [darkMode, setDarkMode] = useState(false)

    // Function to toggle the theme
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}