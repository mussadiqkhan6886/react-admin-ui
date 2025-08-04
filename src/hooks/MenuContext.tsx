// hooks/useMenuContext.ts
import { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a ContextProvider");
  }
  return context;
};
