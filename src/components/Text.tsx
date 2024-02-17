import { Typography, TypographyProps } from "@mui/material";
import { FC } from "react";
interface iProps {
  label?: string;
  component?: string;
}
const Text: FC<TypographyProps & iProps> = ({ children, label, ...props }) => {
  return <Typography {...props}>{children} </Typography>;
};
export default Text;
