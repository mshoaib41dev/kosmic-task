import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Autocomplete, Box, Paper, TextField, useTheme } from '@mui/material'
import React, { useState } from 'react'

interface DropDownProps {
  data: String[],
  value: string,
  setValue: (arg: string) => void
}
function DropDown({ data, value, setValue }: DropDownProps) {
  const theme=useTheme()
  const [open, setOpen]=useState<boolean>()
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
        <Paper style={{ background: theme.palette.background.input, borderRadius: '15px', }}>{children}</Paper>
      )}
      renderInput={(params) => (
        <Box sx={{position: 'relative'}}>
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              placeholder: 'Search',
              style: { backgroundColor: theme.palette.background.dropdown, borderRadius: '12px' }
            }}
            
          />
          <Box sx={{position: 'absolute', top: 17, right: 14}}>
            {open ? <KeyboardArrowUp/> : <KeyboardArrowDown/> }
          </Box>
        </Box>
      )}
    />
  )
}

export default DropDown