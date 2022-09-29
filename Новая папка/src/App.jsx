import { Home, Delivery } from './pages';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Delivery" element={<Delivery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App