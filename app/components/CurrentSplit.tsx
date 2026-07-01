import { teams } from "../../data/teams";

export default function CurrentSplit() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16 text-center">
        <p className="uppercase tracking-[0.35em] text-violet-400">
          CURRENT SPLIT
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Prime League
        </h2>

        <p className="mt-6 text-gray-400">
          Every split has one goal: promotion.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {teams.map((team) => (
          <div
            key={team.id}
            className="rounded-3xl border border-white/10 bg-[#111111] p-8 transition duration-300 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(124,58,237,.3)]"
          >
            <h3 className="text-3xl font-bold">{team.name}</h3>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Current Division</span>
                <span>{team.division}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Season Goal</span>
                <span>{team.goal}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Status</span>
                <span className="text-green-400">Active</span>
              </div>
            </div>

            <a
              href={team.primeLeague}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-full bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"
            >
              View on Prime League →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}