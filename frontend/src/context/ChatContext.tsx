import { createContext, useContext, useState } from "react";

interface ChatProviderProps {
  children: React.ReactElement;
}

const ChatContext = createContext(null);

export const useChat = () => useContext(ChatContext);

const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [stream, setStream] = useState<null | MediaStream>(null);
  const [permission, setPermission] = useState<boolean>(false);

  const [text, setText] = useState<string>("");
  const [history, setHistory] = useState<string>("");

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData: any = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  return (
    <ChatContext.Provider
      value={{
        getMicrophonePermission,
        stream,
        permission,
        text,
        setText,
        history,
        setHistory,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
