import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardItem from "./CardItem";
import DropDown from "./DropDown";

const Episodes = () => {
  const [data, setData] = useState([]);
  const [residents, setResidents] = useState([]);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);

  const api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setData(data);

      const residentsData = await Promise.all(
        data.residents.map((c) => {
          return fetch(c).then((res) => res.json());
        })
      );
      setResidents(residentsData);
      setLoading(false);
    })();
    
  }, [api]);

  // console.log("first fetch", data);
  // console.log("second fetch: ", residents);

  return (
    <div>
      <div className="episode-heading">
        <h1>
          Location: <span className="accent">{data.name}</span>
        </h1>
        <div className="minor-titles">
          <h2>Type: {data.type}</h2>
          <h2>Dimension: {data.dimension}</h2>
        </div>
      </div>

      <Grid container spacing={5} className="grid-container">
        <Grid xs={12} sm={4} md={3}>
          <DropDown
            number={126}
            name="Location"
            id={id}
            setId={setId}
            label="Pick a Location"
          />
        </Grid>
        <CardItem
          results={!loading && residents.length === 0 ? "0" : residents}
        />
      </Grid>
    </div>
  );
};

export default Episodes;
