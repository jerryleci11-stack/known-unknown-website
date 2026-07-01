type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 text-center">

      <p className="uppercase tracking-[0.35em] text-violet-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-5xl font-black">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          {subtitle}
        </p>
      )}

    </div>
  );
}