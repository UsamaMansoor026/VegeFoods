import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { NavigationContextProvider } from "./context/NavigationContext.tsx";
import { UserContextProvider } from "./context/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <NavigationContextProvider>
          <App />
        </NavigationContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
);
