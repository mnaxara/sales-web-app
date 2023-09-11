import { Button as MuiButton, styled } from "@mui/material";

export const Footer = styled("footer")`
  background-color: darkslateblue;
  color: #fff;
  padding: 16px;
`;

/**
 * Styled button to manage the current menu style in nav bar
 * @prop "current" for styles purpose only
 * @returns React.Component
 */
export const Button = styled(MuiButton, {
  shouldForwardProp: (props) => props !== "current",
})(({ theme, current }) => ({
  margin: `${theme.spacing(2)} 0`,
  color: "white",
  display: "flex",
  borderBottom: current ? "1px solid white" : null,
  borderRadius: current ? "0px" : null,
}));
