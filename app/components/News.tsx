export default function News() {
  return (
    <section
      id="news"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-16 text-center">

        <p className="uppercase tracking-[0.35em] text-violet-400">
          LATEST NEWS
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Stay up to Date
        </h2>

        <p className="mt-6 text-gray-400">
          Follow the latest updates from Known Unknown.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 hover:border-violet-500 transition">
          <span className="text-sm uppercase tracking-[0.25em] text-violet-400">
            Announcement
          </span>

          <h3 className="mt-4 text-2xl font-bold">
            Website Launch
          </h3>

          <p className="mt-4 text-gray-400">
            Welcome to the official Known Unknown website.
            More features and updates are coming soon.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 hover:border-violet-500 transition">
          <span className="text-sm uppercase tracking-[0.25em] text-violet-400">
            Recruiting
          </span>

          <h3 className="mt-4 text-2xl font-bold">
            Looking for Players
          </h3>

          <p className="mt-4 text-gray-400">
            Interested in joining Known Unknown?
            Contact us on Discord.
          </p>
        </div>

        <div className="rounded-3xl border border-dashed border-white/20 bg-[#111111] p-8">

          <h3 className="text-2xl font-bold">
            No announcements yet
          </h3>

          <p className="mt-4 text-gray-400">
            Stay tuned. Big things are coming.
          </p>

        </div>

      </div>

    </section>
  );
}