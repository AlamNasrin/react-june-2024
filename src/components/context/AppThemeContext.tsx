import React, { useState } from "react";

export interface AppThemeState {
    mode: string,
    setMode ?: (mode: string) => void
}

export const initialState: AppThemeState = {
    mode: "light"
}

// store
export const AppThemeContext = React.createContext(initialState);

function AppThemeContextProvider(props: any) {

    const [mode, setMode] = useState<string>(initialState.mode);

    /*
    return(
        <AppThemeContext.Provider value={initialState}>
            {props.children}
        </AppThemeContext.Provider>
    )
        */
    return(
        <AppThemeContext.Provider value={{mode, setMode}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}

export default AppThemeContextProvider;