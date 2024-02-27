import { createContext, useContext, useState } from "react";

interface ChatProviderProps {
  children: React.ReactElement;
}

const ChatContext = createContext(null);

export const useChat = () => useContext(ChatContext);

const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  return <ChatContext.Provider value={{}}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
