import { createContext, useContext, useState } from "react";
import { Detail, Gender, Mood, Theme } from "../types/enums";
import { ProviderProps } from "../types/interfaces";

interface SettingsProps {
  theme: Theme;
  mood: Mood;
  detail: Detail;
  gender: Gender;
  limitation: { min: number; max: number };
}

const SetupContext = createContext(null);

export const useSetup = () => useContext(SetupContext);

const SetupProvider: React.FC<ProviderProps> = ({ children }) => {
  const [settingsModalShow, setSettingsModalShow] = useState<boolean>(false);
  const [sideIsOpen, setSideIsOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState<SettingsProps>({
    theme: Theme.Anwalt,
    mood: Mood.besserwisserisch,
    detail: Detail["extrem detailreich"],
    gender: Gender.männlich,
    limitation: { min: 50, max: 200 },
  });

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
