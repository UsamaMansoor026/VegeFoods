import React, { createContext, ReactNode, useState } from "react";

/* Interface for Context Values */
interface NavigationContextType {
  currentLink: string;
  setCurrentLink: (link: string) => void;
}

const defaultValue: NavigationContextType = {
  currentLink: "home",
  setCurrentLink: () => {},
};

export const NavigationContext =
  createContext<NavigationContextType>(defaultValue);

interface NavigationContextProviderTypes {
  children: ReactNode;
}

export const NavigationContextProvider: React.FC<
  NavigationContextProviderTypes
> = ({ children }) => {
  const [currentLink, setLink] = useState("home");

  const setCurrentLink = (link: string) => {
    setLink(link);
  };
  return (
    <NavigationContext.Provider value={{ currentLink, setCurrentLink }}>
      {children}
    </NavigationContext.Provider>
  );
};
