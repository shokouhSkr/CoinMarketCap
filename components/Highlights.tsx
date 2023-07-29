import { Box, Button, Link, Stack, Typography } from "@mui/material";

const Highlights = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" py={{ xs: 2, md: 4 }}>
      <Box>
        <Typography variant="body2" component="h3" fontWeight={600} marginBottom={1}>
          Today's Cryptocurrency Prices by Market Cap
        </Typography>

        <Box display="flex" gap={1}>
          <Typography variant="body2">
            The global crypto market cap is $1.19T, a * increase over the last day.{" "}
            <Link href="/">Read More</Link>
          </Typography>
        </Box>
      </Box>

      <Box display={{ xs: "none", md: "block" }}>ddhhhh</Box>
    </Stack>
  );
};

export default Highlights;
