export default function About() {
  const stats = [
    { value: "5+", label: "Years" },
    { value: "2", label: "Teams" },
    { value: "100+", label: "Members" },
    { value: "D4", label: "Highest Division" },
  ];

  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <div className="grid items-center gap-20 lg:grid-cols-2">

        {/* Left Side */}
        <div>

          <p className="uppercase tracking-[0.35em] text-violet-400">
            ABOUT US
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight md:text-6xl">
            Five Years of
            <span className="block text-violet-400">
              Competition.
            </span>
          </h2>

          <p className="mt-8 leading-8 text-gray-400">
            Known Unknown is a League of Legends organization focused on
            competitive success and a strong community.

            <br />
            <br />

            Since our founding, we've continued to grow together, develop
            players and build an environment where teamwork comes first.

            <br />
            <br />

            From Division 8 all the way to Division 4, every split has
            brought new challenges—and we're ready for the next one.
          </p>

          {/* Timeline */}

          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-violet-500" />
              <span className="font-bold">2021</span>
              <span className="text-gray-400">
                Organization founded
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-violet-500" />
              <span className="font-bold">2022</span>
              <span className="text-gray-400">
                Joined Prime League
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-violet-500" />
              <span className="font-bold">2025</span>
              <span className="text-gray-400">
                Competing in Division 4
              </span>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="grid grid-cols-2 gap-6">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(124,58,237,.25)]"
            >
              <div className="text-5xl font-black text-violet-400">
                {stat.value}
              </div>

              <div className="mt-3 uppercase tracking-[0.2em] text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}