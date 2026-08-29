export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-black" />
        <p className="text-gray-500">Loading Oya...</p>
      </div>
    </main>
  );
}
