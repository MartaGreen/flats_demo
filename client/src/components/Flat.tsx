import { Stack, Typography } from "@mui/material";
import { FlatT } from "@models/flats";

export const Flat = ({ name, address, image_url }: FlatT) => {
  return (
    <Stack
      sx={{
        boxShadow: "1px 1px 2px #bdbdbd",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "2px 2px 2px #bdbdbd",
          transform: "scale(1.02)",
        },
      }}
    >
      <img src={image_url} alt={name} />
      <Stack sx={{ padding: "10px" }} spacing={0.5}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#1c1c1c",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {name}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#626262" }}>
          {address}
        </Typography>
      </Stack>
    </Stack>
  );
};
