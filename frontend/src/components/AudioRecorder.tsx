import { getSpeechToText } from "../utils/getSpeechToText";
import useAudioRecorder from "../hooks/useAudioRecorder";

const AudioRecorder = () => {
  const {
    getMicrophonePermission,
    startRecording,
    stopRecording,
    recordingStatus,
    permission,
    audio,
    text,
    setText,
    audioChunks,
  } = useAudioRecorder();

  return (
    <div>
      <h2>Audio Recorder</h2>
      <main>
        <div className="audio-controls">
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
        </div>
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
        {text ? (
          <div>
            <p>Text:{text}</p>
          </div>
        ) : null}
      </main>
    </div>
  );
};
export default AudioRecorder;
