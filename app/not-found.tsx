export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>

        <p className="mt-2 text-gray-500">
          This page could not be found.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-lg bg-black px-5 py-2 text-white"
        >
          Go home
        </a>
      </div>
    </main>
  );
}
