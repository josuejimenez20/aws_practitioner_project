import React from 'react';
import AppRouter from './routes/AppRouter';
import { Container } from '@mui/material'


function App() {

  return (
    <>
      <Container maxWidth="auto" style={{backgroundColor: 'red'}}>
        <AppRouter />
      </Container>
    </>
  )
}

export default App
