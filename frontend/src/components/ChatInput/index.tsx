import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useChat } from "../../context/ChatContext";
import { useSetup } from "../../context/SetupProvider";
import useAudioRecorder from "../../hooks/useAudioRecorder";
import { getSpeechToText } from "../../utils/getSpeechToText";
import { getTextToChat } from "../../utils/getTextToChat";

function ChatInput() {
  const [textError, setTextError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const writeTextRef = useRef<HTMLInputElement>(null);

  const { sideIsOpen, settings } = useSetup();
  const { startRecording, stopRecording, recordingStatus, audio, audioChunks } =
    useAudioRecorder();
  const { permission, getMicrophonePermission, stream, setText } = useChat();

  const handleTextSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setTextError("");
      setLoading(true);
      if (!writeTextRef.current?.value) {
        setTextError("Please fill in the fields");
        return;
      }
      const data = await getTextToChat(writeTextRef.current.value, settings);
      console.log("data" + data);
    } catch (error) {
      setLoading(false);
      setTextError("Da ist etwas schief gegangen");
    }
    setLoading(false);
  };

  return (
    <section
      className={`fixed-bottom ${
        sideIsOpen ? "side-is-open" : ""
      } chat-section w-100 vh-75 `}
    >
      <Form onSubmit={handleTextSubmit}>
        <Form.Group>
          <Form.Label>inputtext:</Form.Label>
          <Form.Control
            ref={writeTextRef}
            type="text"
            placeholder="ask something"
          />
          <Button type="submit">Send text to BE</Button>
        </Form.Group>
      </Form>
      {!permission ? (
        <button onClick={getMicrophonePermission} type="button">
          Get Microphone
        </button>
      ) : null}
      {permission && recordingStatus === "inactive" ? (
        <button onClick={() => startRecording(stream)} type="button">
          Start Recording
        </button>
      ) : null}
      {recordingStatus === "recording" ? (
        <button onClick={stopRecording} type="button">
          Stop Recording
        </button>
      ) : null}
      <button onClick={() => getSpeechToText(audioChunks, setText)}>
        Send speech to BE
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
