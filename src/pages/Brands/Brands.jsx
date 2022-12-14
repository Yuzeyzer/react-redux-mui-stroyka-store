import React from "react"
import { Container } from "@mui/material"
import { Intro } from "../../components/Intro/Intro"
import intro from "img/intro.jpg"
import { ProductList } from "../../components/ProductList/ProductList"
import { CompanyContent } from "../../components/ProductList/CompanyContent"
import { AlphabetList } from "../../components/AlphabetList/AlphabetList"
import { useSelector } from "react-redux"

export const Brands = () => {
  const list = useSelector((state) => state.brands?.list)

  return (
    <Container sx={{ maxWidth: "1160px", p: "0 !important" }}>
      <Intro
        props={{
          imgUrl: intro,
          title: "Все бренды",
          caption: "",
          path: [
            {
              point: "/",
              name: "Главная",
            },
            {
              point: "/brands",
              name: "Все брэнды",
            },
          ],
        }}
      />
      <ProductList title="Популярные бренды" moreAbout="Все бренды">
        <CompanyContent />
      </ProductList>
      <AlphabetList list={list} />
    </Container>
  )
}
