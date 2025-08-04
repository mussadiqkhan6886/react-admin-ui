import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type MenuContextType = {
  menuBar: boolean;
  setMenuBar: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

type ContextProviderProps = {
  children: ReactNode;
};

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [menuBar, setMenuBar] = useState<boolean>(true);
  const 

  return (
    <MenuContext.Provider value={{ menuBar, setMenuBar }}>
      {children}
    </MenuContext.Provider>
  );
};

export default ContextProvider