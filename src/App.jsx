import { Box } from "@mui/material"
import { Header } from "components"
import { Route, Routes } from "react-router-dom"
import { Footer } from "./components"
import { Brands } from "./pages/Brands/Brands"
import { Delivery } from "./pages/Delivery/Delivery"
import { Home } from "./pages/Home/Home"

const NotFound = () => <h1>tets</h1>

function App() {
  return (
    <Box className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/brands" element={<Brands />} />
        {/* <Route path="/docs" element={<Documentation />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
