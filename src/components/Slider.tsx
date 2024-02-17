import { SliderValueLabelProps, Stack, Tooltip, Slider, useTheme, SliderThumb } from "@mui/material";
import { Text } from '@/components'
import Image from "next/image";

interface SliderProps {
  value: number,
  handleChange: (event: Event, value: number | number[], activeThumb: number) => void,
  max: number,
  min: number,
}

export default function CustomSlider({ value, handleChange, max, min }: SliderProps) {
  const theme = useTheme();
  const { palette } = theme;
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <Text>{min}</Text>
      <Slider
        slots={{
          valueLabel: ValueLabelComponent,
          thumb: ThumbComponent
        }}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        value={value}
        onChange={handleChange}
        sx={{
          '& .MuiSlider-track': {
            backgroundImage: `linear-gradient(90deg,${palette.primary.main}  -20.19%, ${palette.secondary.main} 168.46%)`,
          },
          '& .MuiSlider-rail': {
            color: "rgba(58, 57, 64, 1)"
          },
          "& .MuiSlider-thumb": {
            backgroundColor: 'transparent',
          }

        }}
      />
      <Text>{max}</Text>
    </Stack>
  )
}


function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip componentsProps={{
      tooltip: {
        sx: {
          bgcolor: 'primary.main',

        },
      },
    }} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
interface ThumbComponentProps extends React.HTMLAttributes<unknown> { }

function ThumbComponent(props: ThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      <Image
        src={'/assets/slider-thumb.png'}
        width={18}
        style={{ borderRadius: 15 }}
        height={18}
        alt="Slider thumb"
      />
      {children}
    </SliderThumb>
  );
}