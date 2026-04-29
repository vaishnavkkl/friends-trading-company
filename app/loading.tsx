export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
        <div className="glass aspect-[4/3] animate-pulse rounded-[2rem]" />
        <div>
          <div className="h-4 w-36 animate-pulse rounded-full bg-white/10" />
          <div className="mt-6 h-16 max-w-xl animate-pulse rounded-2xl bg-white/10" />
          <div className="mt-4 h-16 max-w-lg animate-pulse rounded-2xl bg-white/10" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="h-28 animate-pulse rounded-[1.25rem] bg-white/10" />
            <div className="h-28 animate-pulse rounded-[1.25rem] bg-white/10" />
            <div className="h-28 animate-pulse rounded-[1.25rem] bg-white/10" />
          </div>
        </div>
      </div>
    </main>
  );
}
