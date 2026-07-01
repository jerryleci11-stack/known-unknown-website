import { notFound } from "next/navigation";
import { teams } from "../../../data/teams";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TeamPage({ params }: Props) {
  const { id } = await params;

  const team = teams.find((t) => t.id === id);

  if (!team) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-black to-black" />

        {/* Animated Glow */}
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[180px]"
          style={{
            backgroundColor: team.color,
            opacity: 0.25,
          }}
        />

        <div className="relative mx-auto flex max-w-7xl flex-col px-6 py-28">
          <div className="inline-flex w-fit rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-violet-300">
            🏆 Prime League
          </div>

          <h1 className="mt-8 text-7xl font-black">
            {team.name}
          </h1>

          <p className="mt-4 uppercase tracking-[0.35em] text-violet-300">
            {team.type}
          </p>

          <p className="mt-10 max-w-3xl text-xl leading-9 text-gray-400">
            {team.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        {/* Team Information */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Team Information
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Division</span>
                <span>{team.division}</span>
              </div>

              <div className="flex justify-between">
                <span>Goal</span>
                <span>{team.goal}</span>
              </div>

              <div className="flex justify-between">
                <span>Captain</span>
                <span>{team.captain}</span>
              </div>

              <div className="flex justify-between">
                <span>Coach</span>
                <span>{team.coach}</span>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Prime League
            </h2>

            <a
              href={team.primeLeague}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              View Prime League Profile →
            </a>
          </div>
        </div>

        {/* Team Roster */}
        <div className="mt-20">
          <h2 className="mb-8 text-4xl font-black">
            Team Roster
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {team.roster.map((player) => (
              <div
                key={player.role}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_0_35px_rgba(124,58,237,.25)]"
              >
                {/* Avatar */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-3xl">
                  👤
                </div>

                {/* Role */}
                <p className="text-center text-sm uppercase tracking-[0.3em] text-violet-300">
                  {player.role}
                </p>

                {/* Player */}
                <h3 className="mt-4 text-center text-2xl font-bold">
                  {player.player}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}