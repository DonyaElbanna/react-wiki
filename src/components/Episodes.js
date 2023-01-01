import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardItem from "./CardItem";
import DropDown from "./DropDown";

const Episodes = () => {
  const [data, setData] = useState([]);
  const [episodeCharacters, setEpisodeCharacters] = useState([]);
  const [episodeId, setEpisodeId] = useState(1);

  const api = `https://rickandmortyapi.com/api/episode/${episodeId}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setData(data);
    })();
  }, [api]);

  // console.log("first fetch", data.characters);

  useEffect(() => {
    (async function () {
      const charactersData = await Promise.all(
        data.characters.map((c) => {
          return fetch(c).then((res) => res.json());
        })
      );
      setEpisodeCharacters(charactersData);
    })();
  }, [data.characters, setEpisodeCharacters]);

  // console.log("second fetch: ", episodeCharacters);

  return (
    <div>
      <div className="episode-heading">
        <h1>
          {data.episode}: {data.name}
        </h1>
        <h3>Air date: {data.air_date ? data.air_date : "December 2, 2013"}</h3>
      </div>

      <Grid container spacing={5}>
        <Grid xs={12} sm={4} md={3}>
          <DropDown
            episodesN={51}
            name="Episode"
            episodeId={episodeId}
            setEpisodeId={setEpisodeId}
          />
        </Grid>
        <CardItem results={episodeCharacters} />
      </Grid>
    </div>
  );
};

export default Episodes;
