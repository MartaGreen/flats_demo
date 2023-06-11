import { useEffect, useState } from "react";
import { Flat } from "./Flat";
import { Box } from "@mui/material";
import { getFlats } from "@utils/flats";
import { FlatT } from "src/models/flats";

export const Flats = ({ page }: { page: number }) => {
  const [flats, setFlats] = useState<null | FlatT[]>(null);

  const loadFlats = async () => {
    const flats: FlatT[] | null = await getFlats(page);
    setFlats(flats);
  };

  useEffect(() => {
    loadFlats();
  }, [page]);

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
