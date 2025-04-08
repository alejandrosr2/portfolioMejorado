import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/NavBar'
import About from './pages/about/About'
import HomePage from './pages/home/HomePage'
import Projects from './pages/projects/Projects'
import AnimatedBg from './components/animatedbg/AnimatedBg'

function App() {


  return (
    <>
      <AnimatedBg/>
      <nav>
        <NavBar className="relative z-10"/>  
      </nav>
      <main className="lg:mx-auto lg:p-8 pt-4 px-1 lg:max-w-screen-2xl relative z-10">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  )
}

export default App
