import Counter from "./Counter";

export default function App() {
  return (
    <>
      <Counter />
      <Counter initialValue={10} step={2} />
      <Counter initialValue={20} step={3} />
    </>
  );
}
