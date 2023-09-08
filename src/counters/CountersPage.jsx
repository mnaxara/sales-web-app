import Counter from "./Counter";

export default function CountersPage() {
  return (
    <>
      <h1>CounterPage</h1>
      <Counter />
      <Counter step={2} />
      <Counter step={10} />
    </>
  );
}
