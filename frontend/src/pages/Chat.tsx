import AudioRecorder from "../components/AudioRecorder";
import ChatInput from "../components/ChatInput";
import SideBarWrapper from "../components/SideBarWrapper";
import ChatProvider from "../context/ChatContext";

function Chat() {
  return (
    <ChatProvider>
      <SideBarWrapper>
        <h1>YAIM Chat Interface</h1>
        <AudioRecorder />
        <ChatInput />
      </SideBarWrapper>
    </ChatProvider>
  );
}

export default Chat;
