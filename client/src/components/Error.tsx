import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

export const Error = () => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down("sm"));

  return (
    <Stack
      sx={{ width: "70%", margin: "0px auto", minHeight: "calc(100vh - 70px)" }}
      alignItems="flex-start"
      justifyContent="center"
      spacing={1}
    >
      <Typography variant={mobile ? "subtitle1" : "h3"} color="#626262">
        Something went wrong...
      </Typography>
      <Typography variant={mobile ? "subtitle1" : "h4"} color="#626262">
        Try to refresh the page or come back later
      </Typography>
    </Stack>
  );
};
