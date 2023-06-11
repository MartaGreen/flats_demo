import React, { useEffect, useState } from "react";
import { Flats } from "./components";
import { Pagination } from "@mui/material";
import { getPagesAmount } from "./utils";

function App() {
  const [page, setPage] = useState<number>(1);
  const [pagesAmount, setPagesAmount] = useState<number | null>(null);

  const onChangePage = (e: any, p: number) => {
    setPage(p);
  };

  useEffect(() => {
    getPagesAmount().then((amount: number | null) => {
      setPagesAmount(amount);
    });
  }, []);

  return (
    <div>
      {pagesAmount && (
        <>
          <Flats page={page} />
          <Pagination page={page} count={pagesAmount} onChange={onChangePage} />
        </>
      )}
    </div>
  );
}

export default App;
