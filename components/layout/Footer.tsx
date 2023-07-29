"use client";

import { useState, SyntheticEvent } from "react";
import { BottomNavigation, BottomNavigationAction, Box, Tab, Tabs } from "@mui/material";
import { Favorite, Folder, LocationOn, Restore } from "@mui/icons-material";

const Footer = () => {
  const [value, setValue] = useState("recents");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box position="fixed" bottom={0} left={0} right={0}>
      footer
    </Box>
  );
};

export default Footer;
