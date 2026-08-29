"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-2 text-gray-500">
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-black px-5 py-2 text-white"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
