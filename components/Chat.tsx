"use client";

import { useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

type Message = {
  id: string;
  text: string;
  sender: "me" | "other";
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

  function handleSend(text: string) {
    setMessages((current) => [
      ...current,
      {
        id: Date.now().toString(),
        text,
        sender: "me",
      },
    ]);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b p-4">
        <h1 className="text-xl font-bold">Oya</h1>
      </header>

      <MessageList messages={messages} />

      <MessageInput onSend={handleSend} />
    </div>
  );
}
