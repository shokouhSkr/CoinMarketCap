"use client";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Container,
  IconButton,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Close, ExpandMore, Inbox, Mail } from "@mui/icons-material";
import logo from "@/public/logo.svg";
import styled from "@emotion/styled";

const MenuItems = ({ setIsMenuOpen }: { setIsMenuOpen: (isMenuOpen: boolean) => void }) => (
  <Box sx={{ width: "100vw" }} position="relative" role="presentation">
    {/* HEADER */}
    <StyledContainer>
      {/* LOGO */}
      <Box display="flex" alignItems="center">
        <Image src={logo} alt="CoinMarketCap" />
      </Box>

      {/* ClOSE BUTTON */}
      <IconButton onClick={() => setIsMenuOpen(false)}>
        <Close />
      </IconButton>
    </StyledContainer>

    <Container maxWidth="xl">
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding onClick={() => setIsMenuOpen(false)}>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </StyledAccordion>
      <Divider />
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding onClick={() => setIsMenuOpen(false)}>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </StyledAccordion>
      <Divider />
    </Container>
  </Box>
);

const StyledContainer = styled(Container)({
  paddingBottom: "12px",
  paddingTop: "12px",
  position: "sticky",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  zIndex: 1,
}) as typeof Container;

const StyledAccordion = styled(Accordion)({ boxShadow: "none" }) as typeof Accordion;

export default MenuItems;
