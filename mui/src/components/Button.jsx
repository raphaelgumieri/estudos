import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import theme from './Theme';
import {ThemeProvider, styled } from '@mui/material/styles';

const ButtonStyled = styled(Button)(({ theme }) => ({
  color: theme.status.danger,
  fontSize: theme.status.swapFont,
}));

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <ThemeProvider theme={theme}>
      <ButtonStyled variant="text">StatusText</ButtonStyled>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      </ThemeProvider>
    </Stack>
  );
}
