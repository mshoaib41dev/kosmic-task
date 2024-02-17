import { StyleType } from "@/types";
import { Theme } from "@mui/material";

interface iProps {
  theme: Theme;
}

export const useContentStyle = ({ theme }: iProps) => {
  const { palette } = theme;
  const styles: StyleType = {
    container: {
      px: { xs: "20px", md: "25px" },
      pt: { xs: "50px", md: "62px" },
      overflow: "scroll",
      height: `calc(100vh - 280px)`,
    },
    contentContainer: {
      borderBottom: `1px solid ${palette.divider}`,
    },
    topic: {
      border: `1px solid ${palette.divider}`,
      px: "28px",
      py: "14px",
      borderRadius: "30px",
      marginLeft: "12px",
      mt: 1,
    },
    activeTopic: {
      backgroundColor: palette.primary.main,
      color: '#fff',
    },
    sliderContainer: {
      backgroundColor: palette.background.paper,
      py: "20px",
      px: "14px",
      borderRadius: "14px",
      width: { xs: "100%", md: "45%", lg: "35%" },
    },
    buttonContainer: {
      position: "absolute",
      bottom: 0,
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "space-between",
      width: "100vw",
      backgroundColor: {
        xs: palette.background.default,
        md: palette.background.paper,
      },
      p: "29px",
      borderTopWidth: { xs: 0, md: 1 },
      borderTopColor: palette.divider,
      alignItems: "center",
    },
    nextButton: {
      width: "234px",
      padding: "16px 28px",
      backgroundColor: palette.common.white,
      borderRadius: "32px",
      flexDirection: "row",
      justifyContent: { xs: "center", md: "space-between" },
    },
    nextButtonTxt: {
      backgroundImage: `linear-gradient(90deg, ${palette.primary.main} -20.19%,${palette.secondary.main} 168.46%)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  };
  return styles;
};
