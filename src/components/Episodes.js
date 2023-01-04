import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardItem from "./CardItem";
import DropDown from "./DropDown";

const Episodes = ({
  episodeData,
  episodeCharacters,
  episodeId,
  setEpisodeId,
}) => {
  return (
    <div className="containers">
      <div className="episode-heading" style={{ marginBottom: "4.5%" }}>
        <h1>
          {episodeData.episode}:{" "}
          <span className="accent">{episodeData.name}</span>
        </h1>
        <h2>Air date: {episodeData.air_date}</h2>
      </div>
      <Grid container spacing={5} className="grid-container">
        <Grid xs={12} sm={4} md={3}>
          <DropDown
            number={51}
            name="Episode"
            id={episodeId}
            setId={setEpisodeId}
            label="Pick an Episode"
          />
        </Grid>
        <CardItem results={episodeCharacters} />
      </Grid>
    </div>
  );
};

export default Episodes;
