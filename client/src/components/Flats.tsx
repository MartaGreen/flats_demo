import { useEffect, useState } from "react";
import { getFlats } from "../utils";
import { FlatT } from "../types";
import { Flat } from "./Flat";
import { Box } from "@mui/material";

export const Flats = () => {
  const [flats, setFlats] = useState<null | FlatT[]>(null);

  useEffect(() => {
    getFlats(1).then((flats: FlatT[] | null) => {
      setFlats(flats);
    });
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "30px",
        maxWidth: "90%",
        margin: "50px auto",
      }}
    >
      {flats?.map((flat) => (
        <Flat {...flat} key={flat.image_url} />
      ))}
    </Box>
  );
};
