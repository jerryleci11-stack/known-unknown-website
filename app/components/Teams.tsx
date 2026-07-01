import Link from "next/link";
import { teams } from "../../data/teams";

export default function Teams() {
  return (
    <section
      id="teams"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-16 text-center">
        <p className="uppercase tracking-[0.35em] text-violet-400">
          OUR TEAMS
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Meet our Rosters
        </h2>

        <p className="mt-6 text-gray-400">
          Two teams. One vision. One family.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {teams.map((team) => (

          <div
            key={team.id}
            className="rounded-3xl border border-white/10 bg-[#111111] p-10 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(124,58,237,.35)]"
          >

            <p className="uppercase tracking-[0.3em] text-violet-400">
              Prime League
            </p>

            <h3 className="mt-4 text-4xl font-bold">
              {team.name}
            </h3>

            <p className="mt-6 text-gray-400">
              {team.description}
            </p>

            <div className="mt-10 space-y-3">

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Current Division
                </span>

                <span>
                  {team.division}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Goal
                </span>

                <span>
                  {team.goal}
                </span>
              </div>

            </div>

            <div className="mt-10 flex gap-4">

              <Link
                href={`/teams/${team.id}`}
                className="rounded-full bg-violet-600 px-6 py-3 transition hover:bg-violet-500"
              >
                Team Page
              </Link>

              <a
                href={team.primeLeague}
                target="_blank"
                className="rounded-full border border-white/20 px-6 py-3 transition hover:border-violet-500"
              >
                Prime League
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}