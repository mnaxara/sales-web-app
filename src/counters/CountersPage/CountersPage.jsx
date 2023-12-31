import { Typography } from "@mui/material";
import { Counter } from "../../ds/organisms/Counter";

export default function CountersPage() {
  return (
    <>
      <Typography variant="h1">CounterPage</Typography>
      <Counter />
      <Counter step={2} />
      <Counter step={10} />
    </>
  );
}
