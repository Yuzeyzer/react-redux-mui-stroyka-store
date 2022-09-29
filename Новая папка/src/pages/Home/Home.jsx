import React from 'react'
import { Container } from "@mui/material"
import { Header, SliderHomePage, Footer, ProductList } from 'components';

export const Home = () => {
    return (
        <>
            <Header />
            <SliderHomePage />
            <Container sx={{ maxWidth: "1160px" }}>
                <ProductList />
            </Container>
            <Footer />
        </>
    )
}
