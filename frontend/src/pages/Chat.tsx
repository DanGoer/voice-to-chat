//chat and chatinput page
import { useChat } from "../context/ChatContext";
import ChatInput from "../components/ChatInput";
import SideBarWrapper from "../components/SideBarWrapper";

function Chat() {
  const { text } = useChat();
  return (
    <SideBarWrapper>
      <h1>YAIM Chat Interface</h1>
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
