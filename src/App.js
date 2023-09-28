import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width='400px' sx={{ width: {x1: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path='/GymHub' element={<Home />} />
        <Route path='/GymHub/exercise/:id' element={<ExerciseDetail />} />

      </Routes>
      <Footer />
      </Box>
  )
}

export default App