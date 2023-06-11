import { CircularProgress, Stack } from "@mui/material";

export const Loading = () => (
  <Stack justifyContent="center" alignItems="center">
    <CircularProgress color="inherit" size="30%" />
  </Stack>
);
