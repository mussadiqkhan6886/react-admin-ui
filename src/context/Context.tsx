import { createContext, useState } from "react";

export const Context = createContext();


const ContextProvider = ({children}) => {

    const [mode, setMode] = useState('dark')

    return <Context.Provider value={{mode, setMode}}>
        {children}
    </Context.Provider>
}

export default ContextProvider