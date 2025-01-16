import { createContext, useState } from "react";

// Buat context
export const AppContext = createContext();

// Provider untuk membagikan data ke seluruh aplikasi
export const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => setShowMenu(!showMenu);

  const [showResumeMenu, setShowResumeMenu] = useState(false);
  const toggleShowResumeMenu = () => setShowResumeMenu(!showResumeMenu);

  return (
    <AppContext.Provider
      value={{
        showMenu,
        setShowMenu,
        toggleShowMenu,
        showResumeMenu,
        setShowResumeMenu,
        toggleShowResumeMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
