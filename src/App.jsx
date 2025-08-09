import { useState } from 'react'

import { Home, User, Briefcase, FileText } from 'lucide-react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage'

import './App.css'
import NavBar from './components/NavBar'
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ResumePage from './components/ResumePage';
// import { Routes } from 'react-router-dom'

function App() {

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Resume', url: '/resume', icon: FileText }
  ]

  return (


    <Router>
      <div className='bg-orange-50 h-screen'>
        <NavBar items={navItems} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/resume" element={<ResumePage/>}/>
        </Routes>
      </div>
    </Router>

  )
}

export default App
