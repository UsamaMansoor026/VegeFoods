import React, { createContext, ReactNode, useState } from "react";

interface UserContextProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  status: boolean;
  userInfo: {};
  handleUserLogin: (userData: any) => void;
}

const defaultValue: UserContextProps = {
  status: false,
  userInfo: {},
  handleUserLogin: () => {},
};

export const UserContext = createContext<UserContextProps>(defaultValue);

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [status, setStatus] = useState<boolean>(defaultValue.status);
  const [userInfo, setUserInfo] = useState<any>(defaultValue.userInfo);

  const handleUserLogin = (userData: any) => {
    setStatus(true);
    setUserInfo(userData);
  };

  return (
    <UserContext.Provider value={{ status, userInfo, handleUserLogin }}>
      {children}
    </UserContext.Provider>
  );
};
