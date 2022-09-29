import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import { SecondaryButtonIcon, PrimaryButton } from "../Button/Button"
import { RightIcon } from "icons"
import { grey, white, dark } from "../../theme/colors"

export const ProductList = () => {
  return (
    <Box component="section" py={10}>
      <Box display="flex" justifyContent="space-between" mb="18px">
        <Typography fontSize={34} fontWeight={600}>
          Акции
        </Typography>
        <SecondaryButtonIcon icon={<RightIcon />}>
          Все акции
        </SecondaryButtonIcon>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box display="flex" sx={{ border: "1px solid #E8E9EA" }}>
              <Box
                position="relative"
                width="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  component="img"
                  src="https://market.starateli.ru/media/images/products/365h365_sonora_5_kg_a0MxzSH.png"
                  alt="Sonara"
                  height={208}
                />
                <Typography
                  position="absolute"
                  left={16}
                  top={16}
                  border="2px solid #FBE303"
                  py={0.5}
                  px={1}
                  bgcolor={white}
                  fontSize={15}
                  fontWeight={500}
                  lineHeight={1}
                >
                  -25%
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                width="50%"
                sx={{ borderLeft: "1px solid #E8E9EA" }}
                p={2}
              >
                <Typography fontSize={16} color={dark[600]} fontWeight={500}>
                  Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)
                </Typography>
                <Box>
                  <Box display="flex" alignItems="center">
                    <Typography
                      fontSize={20}
                      fontWeight={700}
                      color={dark[500]}
                    >
                      449 ₽
                    </Typography>
                    <Typography
                      ml={1}
                      fontSize={16}
                      fontWeight={500}
                      color={grey[600]}
                      sx={{ textDecoration: "line-through" }}
                    >
                      499 ₽
                    </Typography>
                  </Box>
                  <PrimaryButton
                    sx={{
                      width: "100%",
                      mt: 1,
                      color: dark[600],
                      fontWeight: 600,
                    }}
                  >
                    В корзину
                  </PrimaryButton>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" sx={{ border: "1px solid #E8E9EA" }}>
              <Box
                position="relative"
                width="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  component="img"
                  src="https://market.starateli.ru/media/images/products/365h365_sonora_5_kg_a0MxzSH.png"
                  alt="Sonara"
                  height={208}
                />
                <Typography
                  position="absolute"
                  left={16}
                  top={16}
                  border="2px solid #FBE303"
                  py={0.5}
                  px={1}
                  bgcolor={white}
                  fontSize={15}
                  fontWeight={500}
                  lineHeight={1}
                >
                  -25%
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                width="50%"
                sx={{ borderLeft: "1px solid #E8E9EA" }}
                p={2}
              >
                <Typography fontSize={16} color={dark[600]} fontWeight={500}>
                  Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)
                </Typography>
                <Box>
                  <Box display="flex" alignItems="center">
                    <Typography
                      fontSize={20}
                      fontWeight={700}
                      color={dark[500]}
                    >
                      449 ₽
                    </Typography>
                    <Typography
                      ml={1}
                      fontSize={16}
                      fontWeight={500}
                      color={grey[600]}
                      sx={{ textDecoration: "line-through" }}
                    >
                      499 ₽
                    </Typography>
                  </Box>
                  <PrimaryButton
                    sx={{
                      width: "100%",
                      mt: 1,
                      color: dark[600],
                      fontWeight: 600,
                    }}
                  >
                    В корзину
                  </PrimaryButton>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" sx={{ border: "1px solid #E8E9EA" }}>
              <Box
                position="relative"
                width="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  component="img"
                  src="https://market.starateli.ru/media/images/products/365h365_sonora_5_kg_a0MxzSH.png"
                  alt="Sonara"
                  height={208}
                />
                <Typography
                  position="absolute"
                  left={16}
                  top={16}
                  border="2px solid #FBE303"
                  py={0.5}
                  px={1}
                  bgcolor={white}
                  fontSize={15}
                  fontWeight={500}
                  lineHeight={1}
                >
                  -25%
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                width="50%"
                sx={{ borderLeft: "1px solid #E8E9EA" }}
                p={2}
              >
                <Typography fontSize={16} color={dark[600]} fontWeight={500}>
                  Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)
                </Typography>
                <Box>
                  <Box display="flex" alignItems="center">
                    <Typography
                      fontSize={20}
                      fontWeight={700}
                      color={dark[500]}
                    >
                      449 ₽
                    </Typography>
                    <Typography
                      ml={1}
                      fontSize={16}
                      fontWeight={500}
                      color={grey[600]}
                      sx={{ textDecoration: "line-through" }}
                    >
                      499 ₽
                    </Typography>
                  </Box>
                  <PrimaryButton
                    sx={{
                      width: "100%",
                      mt: 1,
                      color: dark[600],
                      fontWeight: 600,
                    }}
                  >
                    В корзину
                  </PrimaryButton>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" sx={{ border: "1px solid #E8E9EA" }}>
              <Box
                position="relative"
                width="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  component="img"
                  src="https://market.starateli.ru/media/images/products/365h365_sonora_5_kg_a0MxzSH.png"
                  alt="Sonara"
                  height={208}
                />
                <Typography
                  position="absolute"
                  left={16}
                  top={16}
                  border="2px solid #FBE303"
                  py={0.5}
                  px={1}
                  bgcolor={white}
                  fontSize={15}
                  fontWeight={500}
                  lineHeight={1}
                >
                  -25%
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                width="50%"
                sx={{ borderLeft: "1px solid #E8E9EA" }}
                p={2}
              >
                <Typography fontSize={16} color={dark[600]} fontWeight={500}>
                  Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)
                </Typography>
                <Box>
                  <Box display="flex" alignItems="center">
                    <Typography
                      fontSize={20}
                      fontWeight={700}
                      color={dark[500]}
                    >
                      449 ₽
                    </Typography>
                    <Typography
                      ml={1}
                      fontSize={16}
                      fontWeight={500}
                      color={grey[600]}
                      sx={{ textDecoration: "line-through" }}
                    >
                      499 ₽
                    </Typography>
                  </Box>
                  <PrimaryButton
                    sx={{
                      width: "100%",
                      mt: 1,
                      color: dark[600],
                      fontWeight: 600,
                    }}
                  >
                    В корзину
                  </PrimaryButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
