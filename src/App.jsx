import Slider1 from "./Sliders/Slider1"
import { Route, Routes } from "react-router-dom";



function App() {


  return (
    <div>
    <Routes>
      <Route path='/' element={<Slider1></Slider1>} />

    </Routes>
    </div>
  )
}

export default App
