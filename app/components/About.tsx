export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* Text */}

        <div>

          <p className="uppercase tracking-[0.35em] text-violet-400">
            ABOUT US
          </p>

          <h2 className="mt-4 text-5xl font-black">
            More than just a Team.
          </h2>

          <p className="mt-8 leading-8 text-gray-400">
            Known Unknown has been a small family-like League of Legends
            organization for around five years.
            <br /><br />
            Our goal has always been to improve together while enjoying the
            game. Throughout the years we've grown, shrunk and rebuilt, but
            we've always supported each other.
            <br /><br />
            From Division 8 all the way up to Division 4, we've experienced
            every challenge the Prime League has to offer – and we're ready
            for the next one.
          </p>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-6">

          <div className="rounded-3xl border border-white/10 bg-[#111111] p-8">
            <h3 className="text-5xl font-black text-violet-400">
              5+
            </h3>

            <p className="mt-2 text-gray-400">
              Years
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111111] p-8">
            <h3 className="text-5xl font-black text-violet-400">
              2
            </h3>

            <p className="mt-2 text-gray-400">
              Teams
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111111] p-8">
            <h3 className="text-5xl font-black text-violet-400">
              D4–D8
            </h3>

            <p className="mt-2 text-gray-400">
              Experience
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111111] p-8">
            <h3 className="text-5xl font-black text-violet-400">
              100%
            </h3>

            <p className="mt-2 text-gray-400">
              Community
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}