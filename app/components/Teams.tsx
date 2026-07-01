import Card from "./ui/Card";
import Button from "./ui/Button";
import SectionTitle from "./ui/SectionTitle";
import { teams } from "../../data/teams";

export default function Teams() {
  return (
    <section
      id="teams"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <SectionTitle
        eyebrow="OUR TEAMS"
        title="Meet our Teams"
        subtitle="Two competitive rosters. One family. One goal."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {teams.map((team) => (
          <Card key={team.id}>

            {/* Top Accent */}
            <div className="mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
              🏆 Prime League
            </div>

            {/* Team Name */}
            <h3 className="text-4xl font-black">
              {team.name}
            </h3>

            {/* Team Type */}
            <p className="mt-2 uppercase tracking-[0.25em] text-gray-500">
              {team.type}
            </p>

            {/* Description */}
            <p className="mt-6 leading-7 text-gray-400">
              {team.description}
            </p>

            {/* Stats */}
            <div className="mt-10 space-y-4">

              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                <span className="text-gray-400">
                  🏆 Division
                </span>

                <span className="font-semibold text-white">
                  {team.division}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                <span className="text-gray-400">
                  🎯 Split Goal
                </span>

                <span className="font-semibold text-violet-400">
                  {team.goal}
                </span>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Button href={`/teams/${team.id}`}>
                Team Page
              </Button>

              <Button
                href={team.primeLeague}
                variant="secondary"
                external
              >
                Prime League →
              </Button>

            </div>

          </Card>
        ))}
      </div>
    </section>
  );
}