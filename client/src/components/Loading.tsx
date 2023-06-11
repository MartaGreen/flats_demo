import { CircularProgress, Stack } from "@mui/material";

export const Loading = () => (
  <Stack
    justifyContent="center"
    alignItems="center"
    sx={{ minHeight: "calc(100vh - 70px)" }}
  >
    <CircularProgress color="inherit" size="30%" />
  </Stack>
);
