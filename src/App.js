import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classes from "./pages/Classes";
import Home from "./pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/classes' element={<Classes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
