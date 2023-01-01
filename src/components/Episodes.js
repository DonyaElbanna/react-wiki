import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardItem from "./CardItem";
import DropDown from "./DropDown";

const Episodes = () => {
  const [data, setData] = useState([]);
  const [episodeCharacters, setEpisodeCharacters] = useState([]);
  const [id, setId] = useState(1);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setData(data);

      const charactersData = await Promise.all(
        data.characters.map((c) => {
          return fetch(c).then((res) => res.json());
        })
      );
      setEpisodeCharacters(charactersData);
    })();
  }, [api]);

  // console.log("first fetch", data.characters);
  // console.log("second fetch: ", episodeCharacters);

  return (
    <div>
      <div className="episode-heading">
        <h1>
          {data.episode}: <span className="accent">{data.name}</span>
        </h1>
        <h2>Air date: {data.air_date}</h2>
      </div>

      <Grid container spacing={5} className="grid-container">
        <Grid xs={12} sm={4} md={3}>
          <DropDown
            number={51}
            name="Episode"
            id={id}
            setId={setId}
            label="Pick an Episode"
          />
        </Grid>
        <CardItem results={episodeCharacters} />
      </Grid>
    </div>
  );
};

export default Episodes;
