"use client";

import { useState } from "react";
import { Box, Container, Divider, Drawer, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Search from "@/components/icons/Search";
import { Diamond, Menu } from "@mui/icons-material";
import { MenuItems, Navbar } from "@/components";
import styled from "@emotion/styled";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <StyledContainer>
        {/* LOGO */}
        <Box display="flex" alignItems="center">
          <Image src={logo} alt="CoinMarketCap" />
        </Box>

        {/* BUTTONS */}
        <Stack direction="row" alignItems="center">
          <IconButton aria-label="search">
            <Search />
          </IconButton>
          <IconButton aria-label="sing up/login">
            <Diamond />
          </IconButton>
          <IconButton aria-label="menu" onClick={() => setIsMenuOpen(true)}>
            <Menu />
          </IconButton>
        </Stack>
      </StyledContainer>

      {/* MENU */}
      <Drawer anchor="left" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <MenuItems setIsMenuOpen={setIsMenuOpen} />
      </Drawer>

      <Divider />
      <Navbar />
      <Divider />
    </>
  );
};

const StyledContainer = styled(Container)({
  paddingBottom: "12px",
  paddingTop: "12px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default Header;
