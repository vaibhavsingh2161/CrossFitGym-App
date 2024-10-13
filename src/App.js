// type -- rafce for snippet(react arrow function expert component)
import React from 'react';
import { Route, Routes } from 'react-router-dom'; //To route between home page and exrecise details page
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

// xl-->width on extra large devices ,m-->margin auto
const App = () => {
  return (
    <Box width="400px" sx={{ width: {xl: '1488px'}}} m="auto">  
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercise/:id" element={<ExerciseDetail/>} />
          </Routes>
          <Footer/>
    </Box>
  )
}

export default App
