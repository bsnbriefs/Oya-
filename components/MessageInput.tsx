"use client";

import { FormEvent, useState } from "react";

type MessageInputProps = {
  onSend: (message: string) => void;
};

export default function MessageInput({
  onSend,
}: MessageInputProps) {
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const text = message.trim();

    if (!text) return;

    onSend(text);
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 border-t p-4"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 rounded-lg border px-4 py-2 outline-none"
      />

      <button
        type="submit"
        className="rounded-lg bg-black px-5 py-2 text-white"
      >
        Send
      </button>
    </form>
  );
}
