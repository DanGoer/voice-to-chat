import { Button } from "react-bootstrap";
import AudioRecorder from "../components/AudioRecorder";
import { useAuth } from "../context/AuthProvider";
import { useState } from "react";
import SettingsModal from "../components/SettingsModal";
import SideBar from "../components/SideBar";

function Chat({ toggleDarkMode }) {
  const [settingsModalShow, setSettingsModalShow] = useState<boolean>(false);
  const [settings, setSettings] = useState<string>("");
  const [sideIsOpen, setSideIsOpen] = useState<boolean>(false);

  const toggleSettings = () => {
    setSettingsModalShow(!settingsModalShow);
  };

  return (
    <>
      <SideBar
        toggleDarkMode={toggleDarkMode}
        sideIsOpen={sideIsOpen}
        toggleSettings={toggleSettings}
        setSideIsOpen={setSideIsOpen}
      />
      <section
        className={`${
          sideIsOpen ? "side-is-open" : ""
        } chat-section w-100 vh-75 `}
      >
        <h1>YAIM Chat Interface</h1>
        <div>
          <AudioRecorder />
        </div>
        <SettingsModal
          setSettings={setSettings}
          show={settingsModalShow}
          onHide={() => setSettingsModalShow(false)}
        />
      </section>
    </>
  );
}

export default Chat;
