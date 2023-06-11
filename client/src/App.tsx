import React, { useState } from "react";
import { Flats } from "./components";
import { Pagination } from "@mui/material";

function App() {
  const [page, setPage] = useState<number>(1);

  const onChangePage = (e: any, p: number) => {
    setPage(p);
  };

  return (
    <div>
      <Flats page={page} />
      <Pagination page={page} count={20} onChange={onChangePage} />
    </div>
  );
}

export default App;
