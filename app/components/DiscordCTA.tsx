export default function DiscordCTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">

        <div className="rounded-[40px] border border-white/10 bg-[#111111] p-16 text-center">

          <p className="uppercase tracking-[0.35em] text-violet-400">
            COMMUNITY
          </p>

          <h2 className="mt-6 text-5xl font-black">
            Ready to join the family?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Known Unknown has always been more than just another Prime League
            organization. We are a community that supports each other,
            improves together and enjoys every split together.
          </p>

          <a
            href="https://discord.gg/UAwyyfJnm"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex rounded-full bg-violet-600 px-10 py-5 text-lg font-semibold transition hover:bg-violet-500"
          >
            Join our Discord
          </a>

        </div>

      </div>

    </section>
  );
}