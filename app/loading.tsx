export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-background"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="size-12 animate-spin rounded-full border-2 border-orange-500/20 border-t-orange-500" />
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
