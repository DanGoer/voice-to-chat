import { createContext, useContext, useState } from "react";

interface ChatProviderProps {
  children: React.ReactElement;
}

const ChatContext = createContext(null);

export const useChat = () => useContext(ChatContext);

const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [text, setText] = useState<string>("");
  const [history, setHistory] = useState<string>("");

  return (
    <ChatContext.Provider value={{ text, setText, history, setHistory }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
