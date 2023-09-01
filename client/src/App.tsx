import { Route, Routes } from "react-router-dom"
import './App.css'
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Home from "./Pages/Home"
import Layout from "./Layout"
import { useAppStore } from './Global/App-state.ts';
import { useEffect } from 'react'


function App() {

  const [setIsInitialized] = useAppStore((state) => [state.setIsInitialized])

  useEffect(() => {
    setIsInitialized(true);
  },[])


  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
