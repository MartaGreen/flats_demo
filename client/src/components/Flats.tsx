import { useEffect, useState } from "react";
import { Flat } from "./Flat";
import { Loading } from "./Loading";
import { Box } from "@mui/material";
import { getFlats } from "@utils/flats";
import { FlatT } from "src/models/flats";

type FlatsProps = {
  page: number;
  endLoading: () => void;
  loading: boolean;
};

export const Flats = ({ page, endLoading, loading }: FlatsProps) => {
  const [flats, setFlats] = useState<null | FlatT[]>(null);

  const loadFlats = async () => {
    const flats: FlatT[] | null = await getFlats(page);
    setFlats(flats);
    endLoading();
  };

  useEffect(() => {
    loadFlats();
  }, [page]);

  return (
    <>
      {(loading && <Loading />) ||
        (flats && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gridGap: "40px",
              maxWidth: "90%",
              margin: "50px auto",
              minWidth: "300px",
              minHeight: "100vh",
            }}
          >
            {flats?.map((flat) => (
              <Flat {...flat} key={flat.image_url} />
            ))}
          </Box>
        ))}
    </>
  );
};
