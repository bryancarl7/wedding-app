import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function HeaderContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%">
        <Box sx={{ 'text-align':'unset',padding: '20px 30px 10px','font-family': 'Luminary, fantasy',bgcolor: '#282c34', height: '50px' }} >Welcome to Giftorino</Box>
      </Container>
    </React.Fragment>
  );
}