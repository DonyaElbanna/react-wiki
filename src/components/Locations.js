import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardItem from "./CardItem";
import DropDown from "./DropDown";

const Episodes = ({
  LocationData,
  residents,
  locationId,
  setLocationId,
  loading,
}) => {
  return (
    <div className="containers">
      <div className="episode-heading">
        <h1>
          Location: <span className="accent">{LocationData.name}</span>
        </h1>
        <div className="minor-titles">
          <h2>Type: {LocationData.type ? LocationData.type : "unknown"}</h2>
          <h2>
            Dimension:{" "}
            {LocationData.dimension ? LocationData.dimension : "unknown"}
          </h2>
        </div>
      </div>

      <Grid container spacing={5} className="grid-container">
        <Grid xs={12} sm={4} md={3}>
          <DropDown
            number={126}
            name="Location"
            id={locationId}
            setId={setLocationId}
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
