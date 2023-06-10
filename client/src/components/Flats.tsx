import { useEffect, useState } from "react";
import { getFlats } from "../utils";
import { FlatT } from "../types";

export const Flats = () => {
  const [flats, setFlats] = useState<null | FlatT[]>(null);

  useEffect(() => {
    getFlats(1).then((flats: FlatT[] | null) => {
      setFlats(flats);
    });
  }, []);

  return (
    <div>
      {flats?.map((flat) => (
        <div>
          <h4>
            {flat.name} {flat.address}
          </h4>
        </div>
      ))}
    </div>
  );
};
