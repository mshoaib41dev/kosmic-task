"use client";
import {
  Stack,
  useTheme,
  Button,
  Box,
  useMediaQuery,

} from "@mui/material";
import { Dropdown, Slider, Text } from "@/components";
import { useContentStyle } from "./styles";
import { topicData } from "@/util/db";
import { Fragment, useMemo, useState } from "react";
import Image from "next/image";

export default function Content() {
  const theme = useTheme();
  const { palette } = theme;
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const sx = useContentStyle({ theme });
  const [active, setActive] = useState(-1);
  const [words, setWords] = useState(500);
  const [content, setContent] = useState('')

  const topicQuestion = useMemo(() => active >= 0 ? topicData[active].question : '', [active])


  const handleChange = (event: Event, newValue: number | number[]) => {
    setWords(newValue as number);
  };
  const onSubmit = () => {
    const selectedTopic = topicData[active].name
    const payload = { words, selectedTopic, content }
    alert(JSON.stringify(payload, null, 2))
  }
  return (
    <Fragment>
      <Stack sx={sx.container}>
        {/* content Stack */}
        <Stack sx={sx.contentContainer}>
          <Text fontWeight={'500'} fontSize={24}>Content type</Text>
          <Text mb="32px" color={palette.text.secondary}>
            Choose a content type that best fits your needs.
          </Text>
        </Stack>
        {/* tag Stack */}
        <Stack >
          <Text mt={'24px'} mb={'14px'} fontWeight={'500'} fontSize={18}>
            What type of content are you creating?
          </Text>
          <Stack direction={'row'} flexWrap={'wrap'}>
            {topicData.map((data, index) => (
              <Box
                className="pointer"
                key={data.name}
                sx={{ ...sx.topic, ...(active === index && sx.activeTopic) } as object}
                onClick={() => setActive(index)}
              >
                <Text fontWeight={'400'} fontSize={14}>{data.name}</Text>
              </Box>
            ))}
          </Stack>
        </Stack>
        {/* Third Stack */}
        {active >= 0 && <Stack mt={'32px'}>
          <Text mb={'24px'}>{topicQuestion}</Text>
          <Dropdown
            data={topicData[active].options}
            value={content}
            setValue={setContent}
          />
          <Text mb={'24px'} mt={'32px'}>Set the number of words for output text.</Text>
          <Box sx={sx.sliderContainer}>
            <Slider handleChange={handleChange} max={1000} min={100} value={words} />
          </Box>

        </Stack>}

      </Stack>
      {/* Button Stack */}
      <Stack sx={sx.buttonContainer}>
        <Button style={{ height: '51px', width: isMobile ? '234px' : undefined }} sx={{ px: '50px', }} variant="outlined">Back</Button>
        <Button onClick={onSubmit} sx={{ mt: "10px" }}>
          <Stack sx={sx.nextButton}>
            <Text sx={sx.nextButtonTxt}>Next</Text>
            {!isMobile && <Image src="/assets/double-arrow-icon.png" width={20} height={20} alt="arrow-icon" />}
          </Stack>
        </Button>
      </Stack>
    </Fragment>
  );
}
