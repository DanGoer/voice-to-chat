import { Button } from "react-bootstrap";
import AudioRecorder from "../components/AudioRecorder";
import { useAuth } from "../context/AuthProvider";
import { useState } from "react";
import SettingsModal from "../components/SettingsModal";
import SideBar from "../components/SideBar";

function Chat() {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<string>("light");
  const [settings, setSettings] = useState<string>("");

  const { signOut } = useAuth();

  return (
    <SideBar>
      <section className="w-100" data-bs-theme={darkMode}>
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
      </section>
    </SideBar>
  );
}

export default Chat;
