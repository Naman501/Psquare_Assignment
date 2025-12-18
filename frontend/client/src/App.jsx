// import { useState } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage />} />
    </Routes>
</BrowserRouter>
    </>
  )
}

export default App
