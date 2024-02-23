import AudioRecorder from "../components/AudioRecorder";
import SideBarWrapper from "../components/SideBarWrapper";

function Chat() {
  return (
    <SideBarWrapper>
      <h1>YAIM Chat Interface</h1>
      <div>
        <AudioRecorder />
      </div>
    </SideBarWrapper>
  );
}

export default Chat;
