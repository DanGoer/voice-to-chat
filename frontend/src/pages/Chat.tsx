import AudioRecorder from "../components/AudioRecorder";

import { useSetup } from "../context/SetupProvider";

function Chat() {
  const { sideIsOpen } = useSetup();

  return (
    <section
      className={`${
        sideIsOpen ? "side-is-open" : ""
      } chat-section w-100 vh-75 `}
    >
      <h1>YAIM Chat Interface</h1>
      <div>
        <AudioRecorder />
      </div>
    </section>
  );
}

export default Chat;
