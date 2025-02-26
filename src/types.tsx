interface Message {
  id: number;
  text: string;
  name: string;
  avatar: string;
}

interface MessagesListProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export type { Message, MessagesListProps };
