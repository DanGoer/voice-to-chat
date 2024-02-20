import { Button } from "react-bootstrap";
import AudioRecorder from "../components/AudioRecorder";
import { useAuth } from "../context/AuthProvider";
import { useState } from "react";
import SettingsModal from "../components/SettingsModal";

function Chat() {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<string>("light");
  const [settings, setSettings] = useState<string>("");
  const { signOut } = useAuth();

  return (
    <div data-bs-theme={darkMode}>
      <h1>React Media Recorder</h1>
      <div>
        <AudioRecorder />
        <button onClick={signOut}>logout</button>
      </div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Settings
      </Button>
      <Button onClick={() => setDarkMode("dark")}>darkmode on</Button>
      <SettingsModal
        setSettings={setSettings}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Chat;
