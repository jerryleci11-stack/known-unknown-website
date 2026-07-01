import Card from "./ui/Card";
import Button from "./ui/Button";

export default function Teams() {
  return (
    <section className="py-32">
      <Card>
        <h2 className="mb-6 text-3xl font-bold">Button Test</h2>

        <Button href="#">
          Test Button
        </Button>
      </Card>
    </section>
  );
}