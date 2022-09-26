import { Container } from "@mui/material"
import { Header } from "components"
import { ProductList } from "./components/ProductList/ProductList"
import { SliderMain } from "./components/SliderHomePage/SliderHomePage"

function App() {
  return (
    <div className="App">
      <Header />
      <SliderMain />
      <Container sx={{ maxWidth: "1160px" }}>
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </Container>
    </div>
  )
}

export default App
