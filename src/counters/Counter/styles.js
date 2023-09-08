import styled from "@emotion/styled";
import { Card as MuiCard } from "@mui/material";

export const Card = styled(MuiCard)({
  maxWidth: 200,
  margin: "16px 0",
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
