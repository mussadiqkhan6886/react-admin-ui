import { createContext, useState } from "react";

export const MenuContext = createContext(false)

const ContextProvider = ({children} : any) => {
 const [menuBar, setMenuBar] = useState(true)

    return <MenuContext.Provider value={{menuBar, setMenuBar}}>
        {children}
    </MenuContext.Provider>
}

export default ContextProvider