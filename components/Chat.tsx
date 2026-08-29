"use client";

import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b p-4">
        <h1 className="text-xl font-bold">Oya</h1>
      </header>

      <main className="flex-1 p-4">
        <p className="text-gray-500">No messages yet.</p>
      </main>

      <form className="flex gap-2 border-t p-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 rounded-lg border px-4 py-2"
        />

        <button
          type="submit"
          className="rounded-lg bg-black px-5 py-2 text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
}
