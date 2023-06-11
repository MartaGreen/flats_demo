import { ChangeEvent, useEffect, useState } from "react";
import {
  Pagination as MuiPagination,
  PaginationItem,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { getPagesAmount } from "@utils/flats";

type PaginationProps = {
  page: number;
  changePage: (e: ChangeEvent<any>, p: number) => void;
};

export const Pagination = ({ page, changePage }: PaginationProps) => {
  const [pagesAmount, setPagesAmount] = useState<number | null>(null);

  useEffect(() => {
    getPagesAmount().then((amount: number | null) => {
      setPagesAmount(amount);
    });
  }, []);

  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down("sm"));

  return (
    <Stack
      sx={{
        position: "sticky",
        bottom: 0,
        width: "100%",
        height: "70px",
        bgcolor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
      }}
    >
      <MuiPagination
        page={page}
        count={pagesAmount ?? 0}
        onChange={changePage}
        shape="rounded"
        variant="outlined"
        size={mobile ? "small" : "medium"}
        renderItem={(item) => (
          <PaginationItem
            sx={{
              bgcolor: "#fff",
              "&.Mui-selected": { bgcolor: "#e5e5e5" },
            }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};
