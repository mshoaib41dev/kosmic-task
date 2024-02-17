import { Theme } from "@mui/material";

interface iProps {
  theme: Theme;
}

const BUTTON_WIDTH = "234px";
const BUTTON_PADDING = "16px 28px";
const BUTTON_BORDER_RADIUS = "32px";

export const useStyle = ({ theme: { palette } }: iProps) => {
  const containerStyles = {
    px: { xs: "20px", md: "25px" },
    pt: { xs: "50px", md: "62px" },
    overflow: "scroll",
    height: `calc(100vh - 280px)`,
  };

  const contentContainerStyles = {
    borderBottom: `1px solid ${palette.divider}`,
  };

  const topicStyles = {
    border: `1px solid ${palette.divider}`,
    px: "28px",
    py: "14px",
    borderRadius: "30px",
    marginLeft: "12px",
    mt: 1,
  };

  const activeTopicStyles = {
    backgroundColor: palette.primary.main,
    color: '#fff',
  };

  const sliderContainerStyles = {
    backgroundColor: palette.background.paper,
    py: "20px",
    px: "14px",
    borderRadius: "14px",
    width: { xs: "100%", md: "45%", lg: "35%" },
  };

  const buttonContainerStyles = {
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
  };

  const nextButtonStyles = {
    width: BUTTON_WIDTH,
    padding: BUTTON_PADDING,
    backgroundColor: palette.common.white,
    borderRadius: BUTTON_BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: { xs: "center", md: "space-between" },
  };

  const nextButtonTxtStyles = {
    backgroundImage: `linear-gradient(90deg, ${palette.primary.main} -20.19%,${palette.secondary.main} 168.46%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const styles = {
    container: containerStyles,
    contentContainer: contentContainerStyles,
    topic: topicStyles,
    activeTopic: activeTopicStyles,
    sliderContainer: sliderContainerStyles,
    buttonContainer: buttonContainerStyles,
    nextButton: nextButtonStyles,
    nextButtonTxt: nextButtonTxtStyles,
  };

  return styles;
};
