type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="card p-8">
      {children}
    </div>
  );
}