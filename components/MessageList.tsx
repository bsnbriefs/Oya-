type Message = {
  id: string;
  text: string;
  sender: "me" | "other";
};

type MessageListProps = {
  messages: Message[];
};

export default function MessageList({
  messages,
}: MessageListProps) {
  if (messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center p-4">
        <p className="text-gray-500">No messages yet.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-3 overflow-y-auto p-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === "me"
              ? "justify-end"
              : "justify-start"
          }`}
        >
          <div
            className={`max-w-[80%] rounded-2xl px-4 py-2 ${
              message.sender === "me"
                ? "bg-black text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}
