import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddLog from './components/AddLog'
import ViewLog from './components/ViewLog'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddLog/>
     <ViewLog/>
     <NavigationBar/>
    </>
  )
}

export default App
