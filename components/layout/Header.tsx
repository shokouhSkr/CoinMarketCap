"use client";

import { Box, Container, Divider, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Search from "@/components/icons/Search";
import { Diamond, Menu } from "@mui/icons-material";
import { Navbar } from "@/components";

const Header = () => {
  return (
    <>
      <Container
        sx={{
          paddingY: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <Box display="flex" alignItems="center">
          <Image src={logo} alt="CoinMarketCap" />
        </Box>

        {/* BUTTONS */}
        <Stack direction="row" alignItems="center">
          <IconButton color="secondary" aria-label="menu">
            <Search />
          </IconButton>
          <IconButton color="secondary" aria-label="sing up/login">
            <Diamond />
          </IconButton>
          <IconButton color="secondary" aria-label="search">
            <Menu />
          </IconButton>
        </Stack>
      </Container>

      <Divider />
      <Navbar />
      <Divider />
    </>
  );
};

export default Header;
