import { createContext, useContext, useState } from "react";

interface SetupProviderProps {
  children: React.ReactElement;
}

const SetupContext = createContext(null);

export const useSetup = () => useContext(SetupContext);

const SetupProvider: React.FC<SetupProviderProps> = ({ children }) => {
  const [settingsModalShow, setSettingsModalShow] = useState<boolean>(false);
  const [settings, setSettings] = useState<string>("");
  const [sideIsOpen, setSideIsOpen] = useState<boolean>(false);

  const toggleSettings: () => void = () => {
    setSettingsModalShow(!settingsModalShow);
  };

  return (
    <SetupContext.Provider
      value={{
        sideIsOpen,
        setSideIsOpen,
        settings,
        setSettings,
        settingsModalShow,
        setSettingsModalShow,
        toggleSettings,
      }}
    >
      {children}
    </SetupContext.Provider>
  );
};

export default SetupProvider;
