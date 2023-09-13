import { Stack, Typography } from "@mui/material";
import { string } from "prop-types";
import { Link } from "react-router-dom";

export default function ProductDescription({ description, name, id }) {
  return (
    <Stack sx={{ width: "100%" }}>
      <Link to={`products/${id}`}>{name}</Link>
      <Typography noWrap sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
        {description}
      </Typography>
    </Stack>
  );
}

ProductDescription.propTypes = {
  description: string,
  name: string,
  id: string,
};
