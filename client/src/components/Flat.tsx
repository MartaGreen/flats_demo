import { Stack, Typography } from "@mui/material";
import { FlatT } from "@models/flats";

export const Flat = ({ name, address, image_url }: FlatT) => {
  return (
    <Stack
      sx={{
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        },
      }}
    >
      <Stack
        sx={{ bgcolor: "#fff", padding: "15px" }}
        justifyContent="center"
        alignItems="center"
      >
        <img src={image_url} alt={name} style={{ width: "100%" }} />
      </Stack>
      <Stack spacing={0.5} sx={{ padding: "7px 15px" }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#1c1c1c",
            textAlign: "left",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: "14px", color: "#626262", textAlign: "left" }}
        >
          {address}
        </Typography>
      </Stack>
    </Stack>
  );
};
