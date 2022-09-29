import React from "react"
import {
  Box,
  Container,
  TextField,
  List,
  ListItem,
  Typography,
} from "@mui/material"
import { white, yellow, dark, grey } from "theme/colors"
import logo from "icons/logo.svg"
import userIcon from "icons/user.svg"
import orderIcon from "icons/order.svg"
import basketIcon from "icons/basket.svg"
import { MenuIcon, SearchIcon } from "icons"
import { PrimaryButtonIcon } from "../Button/Button"

const stylesButton = {
  bgcolor: yellow[500],
  color: dark[500],
  borderRadius: 0,
  boxShadow: "none",
  height: 48,
  mr: 2,
  py: 1.5,
  "& path": {
    transition: "0.25s",
  },
  "&:hover": {
    bgcolor: dark[600],
    color: white,
  },
  "&:hover path": {
    color: white,
    bgcolor: white,
    stroke: white,
  },
}

const stylesInput = {
  "& > div": {
    height: 48,
    borderRadius: 0,
    width: 440,
    "&:hover:not(.Mui-disabled):before": {
      borderWidth: "2px",
    },
    "&:before": {
      borderBottomColor: grey[700],
    },
    "&:after": {
      borderBottomColor: grey[700],
    },
    "& input": {
      pt: 1.25,
      fontWeight: 500,
      fontSize: 18,
      color: dark[900],
    },
  },
}

export const MiddleHeader = () => {
  const navItems = [
    { label: "Профиль", icon: userIcon },
    { label: "Заказы", icon: orderIcon },
    { label: "Корзина", icon: basketIcon },
  ]
  return (
    <Box py={2}>
      <Container sx={{ maxWidth: "1160px" }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box
            component="img"
            src={logo}
            alt="StroykaStore"
            width={180}
            height={46}
          />
          <Box display="flex">
            <Box display="flex" alignItems="center">
              <PrimaryButtonIcon icon={<MenuIcon />}>Каталог</PrimaryButtonIcon>
              <TextField
                variant="filled"
                placeholder="Поиск"
                classes={{ underline: "red" }}
                InputProps={{
                  endAdornment: <SearchIcon />,
                }}
                sx={stylesInput}
              />
            </Box>
            <Box ml={2}>
              <List sx={{ display: "flex" }}>
                {navItems.map((item) => (
                  <ListItem
                    key={item.label}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: grey[900],
                      cursor: "pointer",
                      "&:last-child": {
                        pr: 0,
                      },
                      "& :hover": {
                        color: dark[600],
                      },
                    }}
                  >
                    <img src={item.icon} />
                    <Typography fontSize={15} fontWeight={500}>
                      {item.label}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
