import { Theme } from "@mui/material";
interface iProps {
  theme: Theme;
}

export const useHeaderStyle = ({ theme }: iProps) => {
  const { palette } = theme;
  const styles = {
    headerContainer: {
      p: { xs: "20px", md: "25px" },
      backgroundColor: palette.background.paper,
      borderBottom: { xs: 0, md: `1px solid ${palette.divider}` },
    },
    backIconContainer: {
      backgroundColor: palette.background.default,
      borderRadius: 3,
      width: "47px",
      height: "47px",
      justifyContent: "center",
      alignItems: "center",
    },
    changeProfile: {
      textDecorationLine: "underline",
    },
    ThemeToggle: {
      py: "5px",
      px: '15px',
    },
  };
  return styles;
};
