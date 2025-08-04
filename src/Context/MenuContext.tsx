import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type MenuContextType = {
  menuBar: boolean;
  setMenuBar: Dispatch<SetStateAction<boolean>>;
  mode: string;
  setMode: Dispatch<SetStateAction<string>>
  setting: boolean;
  setSetting: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

type ContextProviderProps = {
  children: ReactNode;
};

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [menuBar, setMenuBar] = useState<boolean>(true);
  const [mode, setMode] = useState("light")
  const [setting, setSetting] = useState(false)

  return (
    <MenuContext.Provider value={{ menuBar, setMenuBar, mode, setMode, setting, setSetting }}>
      {children}
    </MenuContext.Provider>
  );
};

export default ContextProvider