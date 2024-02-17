import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Autocomplete, Box, Paper, TextField, TypeBackground, useTheme } from '@mui/material'
import React, { useState } from 'react'

// Extend TypeBackground interface
interface CustomTypeBackground extends TypeBackground {
  dropdown: string;
  input: string;
}

interface DropDownProps {
  data: String[],
  value: string,
  setValue: (arg: string) => void
}

function DropDown({ data, value, setValue }: DropDownProps) {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>();

  // Use type casting to avoid TypeScript errors
  const customBackground = theme.palette.background as CustomTypeBackground;

  return (
    <Autocomplete
      freeSolo
      disableClearable
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={data}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue as string);
      }}
      sx={{
        width: { xs: '100%', md: '50%', lg: '40%' },
      }}
      PaperComponent={({ children }) => (
        <Paper style={{ background: customBackground.input, borderRadius: '15px', }}>{children}</Paper>
      )}
      renderInput={(params) => (
        <Box sx={{ position: 'relative' }}>
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              placeholder: 'Search',
              style: { backgroundColor: customBackground.dropdown, borderRadius: '12px' }
            }}
          />
          <Box sx={{ position: 'absolute', top: 17, right: 14 }}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </Box>
        </Box>
      )}
    />
  );
}

export default DropDown;
