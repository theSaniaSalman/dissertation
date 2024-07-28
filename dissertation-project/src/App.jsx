import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Dashboard.jsx'
import { Routes, Route, Router } from 'react-router-dom'
import { GenContract } from './GenContract.jsx'
import { ReviewContract } from './ReviewContract.jsx'
import { Sidebar } from './Sidebar.jsx'
import { Home } from './Home.jsx'
import { Box } from '@mui/material'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
     <div style={{ display: 'flex', width:'100vw' }}> 
       {/* <CssBaseline /> */}
       <Sidebar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate-contract" element={<GenContract />} />
          <Route path="/review-contract" element={<ReviewContract />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
