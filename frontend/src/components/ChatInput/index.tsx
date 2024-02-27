import { useChat } from "../../context/ChatContext";
import { useSetup } from "../../context/SetupProvider";
import useAudioRecorder from "../../hooks/useAudioRecorder";
import { getSpeechToText } from "../../utils/getSpeechToText";

function ChatInput() {
  const { sideIsOpen } = useSetup();
  const {
    getMicrophonePermission,
    startRecording,
    stopRecording,
    recordingStatus,
    permission,
    audio,
    audioChunks,
  } = useAudioRecorder();

  const { setText } = useChat();

  return (
    <section
      className={`fixed-bottom ${
        sideIsOpen ? "side-is-open" : ""
      } chat-section w-100 vh-75 `}
    >
      {!permission ? (
        <button onClick={getMicrophonePermission} type="button">
          Get Microphone
        </button>
      ) : null}
      {permission && recordingStatus === "inactive" ? (
        <button onClick={startRecording} type="button">
          Start Recording
        </button>
      ) : null}
      {recordingStatus === "recording" ? (
        <button onClick={stopRecording} type="button">
          Stop Recording
        </button>
      ) : null}
      <button onClick={() => getSpeechToText(audioChunks, setText)}>
        Send to BE
      </button>
      {audio ? (
        <div className="audio-container">
          <audio src={audio} controls></audio>
          <a download href={audio}>
            Download Recording
          </a>
        </div>
      ) : null}
    </section>
  );
}

export default ChatInput;
