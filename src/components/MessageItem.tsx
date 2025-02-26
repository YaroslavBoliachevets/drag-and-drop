import { Message } from '../types';

function MessageItem({ message }: { message: Message }) {
  return (
    <div className="message-item">
      <img src={message.avatar} alt={message.name} className="avatar" />

      <div className="message-text">
        <p>{message.text}</p>

        <div className="message-metric">
          <p>id:{message.id}</p>
          <p>{message.name}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
