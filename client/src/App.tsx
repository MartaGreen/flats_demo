import { useState } from "react";
import { Flats } from "@components/Flats";
import { Pagination } from "@components/Pagintaion";
import { Stack } from "@mui/material";

function App() {
  const [page, setPage] = useState<number>(1);

  const onChangePage = (e: any, p: number) => {
    setPage(p);
  };

  return (
    <Stack
      sx={{
        bgcolor: "#eaeaea",
      }}
    >
      <Flats page={page} />
      <Pagination page={page} changePage={onChangePage} />
    </Stack>
  );
}

export default App;
