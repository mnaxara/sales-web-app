import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
  Typography,
} from "@mui/material";
import { useConstraints } from "../../../hooks";

const constraints = [
  { name: "cost", label: "Cost" },
  { name: "time", label: "Time" },
  { name: "scope", label: "Scope" },
];

export default function ProjectsPage() {
  const { constraintsState, toggle } = useConstraints(constraints);

  return (
    <>
      <Typography variant="h1">Projets</Typography>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Projects constraints</FormLabel>
        <FormGroup>
          {constraints.map(({ name, label }) => (
            <FormControlLabel
              key={label}
              control={
                <Switch
                  checked={constraintsState[name]}
                  onChange={toggle(name)}
                  name={name}
                />
              }
              label={label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </>
  );
}
