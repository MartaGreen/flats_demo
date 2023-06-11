import { useState } from "react";
import { Flats } from "@components/Flats";
import { Pagination } from "@components/Pagintaion";
import { Stack } from "@mui/material";

function App() {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const onChangePage = (e: any, p: number) => {
    setPage(p);
    setLoading(true);
  };

  const onEndLoading = () => {
    setLoading(false);
  };

  return (
    <Stack
      sx={{
        bgcolor: "#eaeaea",
        minWidth: "320px",
      }}
    >
      <Flats page={page} endLoading={onEndLoading} loading={loading} />
      <Pagination page={page} changePage={onChangePage} />
    </Stack>
  );
}

export default App;
