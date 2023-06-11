import { CircularProgress, Stack } from "@mui/material";

export const Loading = () => (
  <Stack
    justifyContent="center"
    alignItems="center"
    sx={{ minHeight: "100vh" }}
  >
    <CircularProgress color="inherit" size="30%" />
  </Stack>
);
