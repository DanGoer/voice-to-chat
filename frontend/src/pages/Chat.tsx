import AudioRecorder from "../components/AudioRecorder";
import ChatInput from "../components/ChatInput";
import SideBarWrapper from "../components/SideBarWrapper";
import { useChat } from "../context/ChatContext";

function Chat() {
  const { text } = useChat();
  return (
    <SideBarWrapper>
      <h1>YAIM Chat Interface</h1>
      <AudioRecorder />
      <ChatInput />
      {text ? (
        <div>
          <p>Text:{text}</p>
        </div>
      ) : null}
    </SideBarWrapper>
  );
}

export default Chat;
