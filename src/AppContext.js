import React, { createContext, useState } from "react";



export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);

    const handleToggleLogged = () => {
        setIsLogged(prevValue => !prevValue)
    }

    return (
        <AppContext.Provider value={{
            isLogged,
            toggleIsLogged: handleToggleLogged,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;