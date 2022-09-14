import React from "react";
import { AppBar, Box, Container, Button } from "@mui/material";
import { grey, white, yellow } from "theme/colors";
import { TopHeader } from "./TopHeader";
import logo from "icons/logo.svg";

export const Header = () => {
  return (
    <AppBar sx={{ bgcolor: white }}>
      <TopHeader />
      <Box py={2}>
        <Container sx={{ maxWidth: "1160px" }}>
          <Box display="flex">
            <Box
              component="img"
              src={logo}
              alt="StroykaStore"
              width={180}
              height={46}
            />
            <Box>
              <Button variant="contained" sx={{ bgcolor: yellow[500] }}>
                Каталог
              </Button>
            </Box>
            <Box></Box>
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
};
