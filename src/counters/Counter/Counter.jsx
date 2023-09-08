import { number } from "prop-types";
import {
  Button,
  ButtonGroup,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Card } from "./styles";

import { useCounter } from "../../hooks";

export default function Counter({ initialValue = 0, step = 1 }) {
  const [counter, { increment, decrement }] = useCounter(initialValue, step);

  return (
    <Card elevation={5}>
      <CardContent>
        <Typography variant="h2" component="p">
          {counter}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup variant="outlined">
          <Button onClick={decrement}>{`- ${step}`}</Button>
          <Button onClick={increment}>{`+ ${step}`}</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}

Counter.propTypes = {
  initialValue: number,
  step: number,
};
