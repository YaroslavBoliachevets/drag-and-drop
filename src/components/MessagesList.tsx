import { MessagesListProps } from '../types';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from '@hello-pangea/dnd';
import MessageItem from './MessageItem';

function MessagesList({ messages, setMessages }: MessagesListProps) {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return; // Если элемент не отпустили на новом месте, ничего не делаем

    const reorderedMessages = [...messages];
    const [movedMessage] = reorderedMessages.splice(result.source.index, 1); // Удаляем перетаскиваемый элемент
    reorderedMessages.splice(result.destination.index, 0, movedMessage); // Вставляем его в новое место

    setMessages(reorderedMessages);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="messages">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="message-list"
          >
            {messages.map((message, index) => (
              <Draggable
                key={message.id}
                draggableId={message.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="message-content"
                  >
                    <MessageItem message={message} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}{' '}
            {/* Нужен для корректного отображения списка */}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export { MessagesList };
