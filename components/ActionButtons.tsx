"use client";

import styled from "@emotion/styled";
import { Delete, StarRateRounded } from "@mui/icons-material";
import { Stack, Button, ButtonGroup } from "@mui/material";

const ActionButtons = () => {
  return (
    <Stack direction="row" overflow="auto" spacing={0.75} className="hide-scrollbar">
      <StyledButton variant="contained" startIcon={<StarRateRounded color="secondary" />}>
        Watchlist
      </StyledButton>
      <StyledButton variant="contained" startIcon={<StarRateRounded color="secondary" />}>
        Portfolio
      </StyledButton>
      <StyledButton variant="contained" fullWidth startIcon={<StarRateRounded color="secondary" />}>
        Filters
      </StyledButton>
      <StyledButton variant="contained" fullWidth startIcon={<StarRateRounded color="secondary" />}>
        Customize
      </StyledButton>

      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>
          <StarRateRounded />
        </Button>
        <Button>
          <StarRateRounded />
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

const StyledButton = styled(Button)({
  backgroundColor: "#EFF2F5",
  minWidth: "90px",
  height: "32px",
  fontSize: "12px",
  fontWeight: 700,
  boxShadow: "none",
  "& .MuiButton-startIcon": {
    marginRight: "2px",
  },
}) as typeof Button;

export default ActionButtons;
