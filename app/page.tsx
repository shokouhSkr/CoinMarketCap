import { ActionButtons, Highlights, Table } from "@/components";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box px={2}>
      <Highlights />
      <ActionButtons />
      <Table />
    </Box>
  );
}
