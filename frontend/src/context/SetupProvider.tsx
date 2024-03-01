import { createContext, useContext, useState } from "react";

interface SetupProviderProps {
  children: React.ReactElement;
}

enum Theme {
  "Pirat" = 0,
  "Ausbilder" = 1,
  "Arzt" = 2,
  "Anwalt" = 3,
  "Polizist" = 4,
  "6th" = 5,
  "7th" = 6,
}

enum Mood {
  "glücklich" = 0,
  "wütend" = 1,
  "lustig" = 2,
  "ernst" = 3,
  "besserwisserisch" = 4,
  "6th" = 5,
  "7th" = 6,
}

enum Detail {
  "standard" = 0,
  "sehr detailreich" = 1,
  "extrem detailreich" = 2,
  "kurz gehalten" = 3,
  "extrem kurz gehalten" = 4,
  "6th" = 5,
  "7th" = 6,
}

enum Gender {
  "männlich" = 0,
  "weiblich" = 1,
  "binär" = 2,
  "anderes" = 3,
}

interface SettingsProps {
  theme: Theme;
  mood: Mood;
  detail: Detail;
  gender: Gender;
  limitation: { min: number; max: number };
}

const SetupContext = createContext(null);

export const useSetup = () => useContext(SetupContext);

const SetupProvider: React.FC<SetupProviderProps> = ({ children }) => {
  const [settingsModalShow, setSettingsModalShow] = useState<boolean>(false);
  const [settings, setSettings] = useState<SettingsProps>({
    theme: 1,
    mood: 2,
    detail: 3,
    gender: 2,
    limitation: { min: 50, max: 200 },
  });
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
