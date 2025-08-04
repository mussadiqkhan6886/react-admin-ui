import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type MenuContextType = {
  menuBar: boolean;
  setMenuBar: Dispatch<SetStateAction<boolean>>;
  mode: string;
  setMode: Dispatch<SetStateAction<string>>
};

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

type ContextProviderProps = {
  children: ReactNode;
};

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [menuBar, setMenuBar] = useState<boolean>(true);
  const [mode, setMode] = useState("light")

  return (
    <MenuContext.Provider value={{ menuBar, setMenuBar, mode, setMode }}>
      {children}
    </MenuContext.Provider>
  );
};

export default ContextProvider